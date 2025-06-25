import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatForm } from "../chat-form";
import { QueryClient, QueryClientProvider } from "react-query";

// Mock Next.js App Router
const mockPush = jest.fn();
const mockRouter = {
  push: mockPush,
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
};

// Mock all the dependencies
jest.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
  withBaseUrl: (path: string) => `http://localhost:3001${path}`,
}));

jest.mock("@ai-sdk/react", () => ({
  useChat: jest.fn(() => ({
    messages: [],
    input: "",
    setInput: jest.fn(),
    append: jest.fn(),
    stop: jest.fn(),
  })),
}));

jest.mock("@/lib/auth-client", () => ({
  useSession: jest.fn(() => ({
    data: {
      user: {
        name: "Test User",
      },
    },
  })),
}));

jest.mock("@/contexts/learning-material-context", () => ({
  useLearningMaterials: jest.fn(() => ({})),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  usePathname: jest.fn(() => "/"),
}));

jest.mock("@/lib/save-chat", () => ({
  saveChat: jest.fn(),
}));

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQueryClient: jest.fn(() => ({
    invalidateQueries: jest.fn(),
  })),
}));

// Mock UI components
jest.mock("@/components/ui/button", () => ({
  Button: ({
    children,
    onClick,
    variant,
    size,
    className,
    type,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: string;
    size?: string;
    className?: string;
    type?: "submit" | "reset" | "button";
  }) => (
    <button
      onClick={onClick}
      className={className}
      data-variant={variant}
      data-size={size}
      data-testid="submit-button"
      type={type || "submit"}
    >
      {children}
    </button>
  ),
}));

jest.mock("@/components/ui/tooltip", () => ({
  Tooltip: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  TooltipContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tooltip-content">{children}</div>
  ),
  TooltipTrigger: ({
    children,
  }: {
    children: React.ReactNode;
    asChild?: boolean;
  }) => <div>{children}</div>,
}));

jest.mock("@/components/autoresize-textarea", () => ({
  AutoResizeTextarea: ({
    onKeyDown,
    onChange,
    value,
    placeholder,
    className,
    autoFocus,
  }: {
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    className?: string;
    autoFocus?: boolean;
  }) => (
    <textarea
      onKeyDown={onKeyDown}
      onChange={(e) => onChange?.(e.target.value)}
      value={value}
      placeholder={placeholder}
      className={className}
      autoFocus={autoFocus}
      data-testid="chat-textarea"
    />
  ),
}));

jest.mock("lucide-react", () => ({
  ArrowUpIcon: ({ size }: { size?: number }) => (
    <div data-testid="arrow-up-icon" data-size={size} />
  ),
}));

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as unknown as jest.MockedFunction<typeof fetch>;

// Mock window.history
Object.defineProperty(window, "history", {
  value: {
    replaceState: jest.fn(),
  },
  writable: true,
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe("ChatForm", () => {
  let queryClient: QueryClient;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mockUseChat = require("@ai-sdk/react").useChat;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mockUseSession = require("@/lib/auth-client").useSession;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mockUseRouter = require("next/navigation").useRouter;
  const mockPush = jest.fn();

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });

    jest.clearAllMocks();
    mockUseRouter.mockReturnValue(mockRouter);
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ threadId: "test-thread-id" }),
    });
  });

  const renderWithQueryClient = (component: React.ReactElement) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  it("renders the initial header when no messages", () => {
    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: jest.fn(),
      append: jest.fn(),
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    expect(screen.getByText("Hello, Test User")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I'm BrainBytes AI, a chatbot that can help you with your questions."
      )
    ).toBeInTheDocument();
  });

  it("renders the chat form with textarea and submit button", () => {
    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: jest.fn(),
      append: jest.fn(),
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    expect(screen.getByTestId("chat-textarea")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter a message")).toBeInTheDocument();
  });

  it("handles input changes correctly", () => {
    const mockSetInput = jest.fn();
    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: mockSetInput,
      append: jest.fn(),
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    const textarea = screen.getByTestId("chat-textarea");
    fireEvent.change(textarea, { target: { value: "Hello world" } });

    expect(mockSetInput).toHaveBeenCalledWith("Hello world");
  });

  it.skip("handles form submission with no existing messages", async () => {
    const mockSetInput = jest.fn();
    const mockAppend = jest.fn();
    mockUseChat.mockReturnValue({
      messages: [],
      input: "Test message",
      setInput: mockSetInput,
      append: mockAppend,
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    // Simulate form submission by directly calling the form's onSubmit
    const form = screen.getByTestId("chat-textarea").closest("form");
    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });

    // Prevent default to avoid actual form submission
    Object.defineProperty(submitEvent, "preventDefault", {
      value: jest.fn(),
    });

    form?.dispatchEvent(submitEvent);

    // Wait for async operations
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "http://localhost:3001/api/new-chat",
        {
          method: "POST",
          credentials: "include",
        }
      );
    });

    // Check that router.push was called with correct URL
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        "/chat/test-thread-id?initialChat=Test message"
      );
    });
  });

  it("handles form submission with existing messages", () => {
    const mockAppend = jest.fn();
    const mockStop = jest.fn();
    const mockSetInput = jest.fn();

    mockUseChat.mockReturnValue({
      messages: [{ role: "user", content: "Previous message" }],
      input: "New message",
      setInput: mockSetInput,
      append: mockAppend,
      stop: mockStop,
    });

    renderWithQueryClient(<ChatForm />);

    const form = screen.getByTestId("chat-textarea").closest("form");
    fireEvent.submit(form!);

    expect(mockStop).toHaveBeenCalled();
    expect(mockAppend).toHaveBeenCalledWith({
      content: "New message",
      role: "user",
    });
    expect(mockSetInput).toHaveBeenCalledWith("");
  });

  it("handles Enter key submission", () => {
    const mockAppend = jest.fn();
    const mockStop = jest.fn();
    const mockSetInput = jest.fn();

    mockUseChat.mockReturnValue({
      messages: [{ role: "user", content: "Previous message" }],
      input: "Test message",
      setInput: mockSetInput,
      append: mockAppend,
      stop: mockStop,
    });

    renderWithQueryClient(<ChatForm />);

    const textarea = screen.getByTestId("chat-textarea");
    fireEvent.keyDown(textarea, { key: "Enter", shiftKey: false });

    expect(mockStop).toHaveBeenCalled();
    expect(mockAppend).toHaveBeenCalledWith({
      content: "Test message",
      role: "user",
    });
  });

  it("does not submit on Shift+Enter", () => {
    const mockAppend = jest.fn();

    mockUseChat.mockReturnValue({
      messages: [{ role: "user", content: "Previous message" }],
      input: "Test message",
      setInput: jest.fn(),
      append: mockAppend,
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    const textarea = screen.getByTestId("chat-textarea");
    fireEvent.keyDown(textarea, { key: "Enter", shiftKey: true });

    expect(mockAppend).not.toHaveBeenCalled();
  });

  it("renders messages correctly", () => {
    mockUseChat.mockReturnValue({
      messages: [
        { role: "user", content: "Hello" },
        { role: "assistant", content: "Hi there!" },
      ],
      input: "",
      setInput: jest.fn(),
      append: jest.fn(),
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hi there!")).toBeInTheDocument();
  });

  it("handles initialChat prop correctly", () => {
    const mockAppend = jest.fn();

    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: jest.fn(),
      append: mockAppend,
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm initialChat="Initial message" />);

    expect(mockAppend).toHaveBeenCalledWith({
      content: "Initial message",
      role: "user",
    });
  });

  it("shows user name when session is available", () => {
    mockUseSession.mockReturnValue({
      data: {
        user: {
          name: "John Doe",
        },
      },
    });

    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: jest.fn(),
      append: jest.fn(),
      stop: jest.fn(),
    });

    renderWithQueryClient(<ChatForm />);

    expect(screen.getByText("Hello, John Doe")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    mockUseChat.mockReturnValue({
      messages: [],
      input: "",
      setInput: jest.fn(),
      append: jest.fn(),
      stop: jest.fn(),
    });

    const { container } = renderWithQueryClient(
      <ChatForm className="custom-class" />
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
