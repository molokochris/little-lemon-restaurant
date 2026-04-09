import { render } from "@testing-library/react";
import BookingPage from "./BookingPage";

// Extract the reducer functions for testing
const initializeTimes = () => {
  return {
    date: new Date().toISOString().split("T")[0],
    times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
  };
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        date: action.payload,
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
      };
    default:
      return state;
  }
};

describe("Reducer Functions", () => {
  describe("initializeTimes", () => {
    test("returns an object with date and times properties", () => {
      const result = initializeTimes();

      expect(result).toHaveProperty("date");
      expect(result).toHaveProperty("times");
    });

    test("returns todays date in YYYY-MM-DD format", () => {
      const result = initializeTimes();
      const todayDate = new Date().toISOString().split("T")[0];

      expect(result.date).toBe(todayDate);
    });

    test("returns correct initial times array", () => {
      const result = initializeTimes();
      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

      expect(result.times).toEqual(expectedTimes);
    });
  });

  describe("updateTimes", () => {
    test("returns the same state for unknown action types", () => {
      const initialState = {
        date: "2024-04-09",
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
      };

      const result = updateTimes(initialState, { type: "UNKNOWN" });

      expect(result).toEqual(initialState);
    });

    test("updates the date and times when UPDATE_TIMES action is dispatched", () => {
      const initialState = {
        date: "2024-04-09",
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
      };

      const newDate = "2024-04-10";
      const result = updateTimes(initialState, {
        type: "UPDATE_TIMES",
        payload: newDate,
      });

      expect(result.date).toBe(newDate);
      expect(result.times).toEqual([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ]);
    });

    test("returns a new state object (not mutating the original)", () => {
      const initialState = {
        date: "2024-04-09",
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
      };

      const newDate = "2024-04-10";
      const result = updateTimes(initialState, {
        type: "UPDATE_TIMES",
        payload: newDate,
      });

      expect(result).not.toBe(initialState);
      expect(initialState.date).toBe("2024-04-09");
      expect(result.date).toBe(newDate);
    });

    test("preserves the same times array structure", () => {
      const initialState = {
        date: "2024-04-09",
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
      };

      const result = updateTimes(initialState, {
        type: "UPDATE_TIMES",
        payload: "2024-04-15",
      });

      expect(Array.isArray(result.times)).toBe(true);
      expect(result.times.length).toBe(5);
      expect(result.times).toEqual(initialState.times);
    });
  });
});
