import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../login-form";

// Mock the auth module
jest.mock("@/lib/auth", () => ({
  signIn: {
    social: jest.fn(),
  },
}));

// Mock lucide-react icons
jest.mock("lucide-react", () => ({
  Loader2: ({ className }: { className?: string }) => (
    <div data-testid="loader-icon" className={className} />
  ),
  Github: ({ className }: { className?: string }) => (
    <div data-testid="github-icon" className={className} />
  ),
}));

// Mock the Button component
jest.mock("@/components/ui/button", () => ({
  Button: ({
    children,
    onClick,
    variant,
    type,
    className,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: string;
    type?: "submit" | "reset" | "button";
    className?: string;
  }) => (
    <button
      onClick={onClick}
      type={type}
      className={className}
      data-variant={variant}
      data-testid="sign-in-button"
    >
      {children}
    </button>
  ),
}));

describe("LoginForm", () => {
  const mockSignIn = require("@/lib/auth").signIn.social;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    mockSignIn.mockResolvedValue(undefined);
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders the login form with GitHub sign-in button", () => {
    render(<LoginForm />);

    const button = screen.getByTestId("sign-in-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sign in with GitHub");
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
  });

  it("shows loading state when sign-in is clicked", async () => {
    render(<LoginForm />);

    const button = screen.getByTestId("sign-in-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("github-icon")).not.toBeInTheDocument();
    });
  });

  it("calls signIn.social with correct parameters when button is clicked", async () => {
    render(<LoginForm />);

    const button = screen.getByTestId("sign-in-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith({
        provider: "github",
        callbackURL: "http://localhost:3000/chat",
      });
    });
  });

  it("returns to normal state after sign-in process completes", async () => {
    render(<LoginForm />);

    const button = screen.getByTestId("sign-in-button");
    fireEvent.click(button);

    // Should show loading state
    await waitFor(() => {
      expect(screen.getByTestId("loader-icon")).toBeInTheDocument();
    });

    // Fast forward through the 3-second timeout
    jest.advanceTimersByTime(3000);

    // Should return to normal state
    await waitFor(() => {
      expect(screen.getByTestId("github-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("loader-icon")).not.toBeInTheDocument();
    });
  });

  it("has correct button styling and attributes", () => {
    render(<LoginForm />);

    const button = screen.getByTestId("sign-in-button");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveClass("cursor-pointer");
  });
});
