import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "../login-page";

// Mock the LoginForm component
jest.mock("@/components/chat/login-form", () => {
  return function MockLoginForm() {
    return <div data-testid="login-form">Mocked Login Form</div>;
  };
});

describe("LoginPage", () => {
  it("renders the LoginPage component", () => {
    render(<LoginPage />);

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByText("Mocked Login Form")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { container } = render(<LoginPage />);
    expect(container).toBeInTheDocument();
  });
});
