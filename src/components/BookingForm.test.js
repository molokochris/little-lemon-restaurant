import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  test("renders all form labels with static text", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

    render(<BookingForm availableTimes={availableTimes} />);

    // Check for static label text
    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose available time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
  });

  test("renders the submit button with correct text", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

    render(<BookingForm availableTimes={availableTimes} />);

    expect(
      screen.getByDisplayValue("Make Your reservation"),
    ).toBeInTheDocument();
  });

  test("renders the form with correct input ids", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

    render(<BookingForm availableTimes={availableTimes} />);

    expect(
      screen.getByTestId("res-date") || screen.getByLabelText("Choose date"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Choose available time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
  });

  test("renders occasion options", () => {
    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

    render(<BookingForm availableTimes={availableTimes} />);

    expect(screen.getByText("Birthday")).toBeInTheDocument();
    expect(screen.getByText("Anniversary")).toBeInTheDocument();
  });
});
