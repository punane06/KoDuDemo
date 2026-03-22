import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LiisiChatPage from "./page";

describe("Liisi Chat Page", () => {
  it("allows sending a message from the input", () => {
    localStorage.clear();

    render(<LiisiChatPage />);

    const input = screen.getByLabelText(/Message input/i);
    const sendButton = screen.getByLabelText(/Send message/i);

    fireEvent.change(input, { target: { value: "Kas rõdu klaasitakse ka?" } });
    fireEvent.click(sendButton);

    expect(screen.getByText(/Kas rõdu klaasitakse ka\?/i)).toBeInTheDocument();
  });

  it("renders developer chat header, message stream and composer controls", () => {
    localStorage.clear();

    render(<LiisiChatPage />);

    expect(screen.getByRole("heading", { name: /Developer Chat/i })).toBeInTheDocument();
    expect(screen.getByText(/Usually responds in a few hours/i)).toBeInTheDocument();

    expect(screen.getByText(/When will the bathroom tiling be completed\?/i)).toBeInTheDocument();
    expect(screen.getByText(/The bathroom tiling is estimated to be completed by March 28th/i)).toBeInTheDocument();

    expect(screen.getByText(/Mar 22, 09:00 AM/i)).toBeInTheDocument();
    expect(screen.getByText(/Mar 22, 03:00 PM/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Attach image/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type a message\.\.\./i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Send message/i)).toBeInTheDocument();
  });
});
