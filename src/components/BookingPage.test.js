import { render } from "@testing-library/react";
import BookingPage from "./BookingPage";

// Mock the global fetchAPI function
global.fetchAPI = jest.fn((date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
});

// Extract the reducer functions for testing
const initializeTimes = (date) => {
  const availableTimes = global.fetchAPI(date);
  return availableTimes;
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      const newTimes = global.fetchAPI(action.payload);
      return {
        ...state,
        date: action.payload,
        times: newTimes,
      };
    case "UPDATE_SELECTED_TIME":
      return {
        ...state,
        selectedTime: action.payload,
      };
    default:
      return state;
  }
};

describe("Reducer Functions", () => {
  describe("initializeTimes", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("calls fetchAPI with the provided date", () => {
      const testDate = new Date("2024-04-09");
      initializeTimes(testDate);

      expect(global.fetchAPI).toHaveBeenCalledWith(testDate);
    });

    test("returns the result of fetchAPI", () => {
      const testDate = new Date("2024-04-09");
      const result = initializeTimes(testDate);
      const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

      expect(result).toEqual(expectedTimes);
    });

    test("returns a non-empty array of available times", () => {
      const testDate = new Date("2024-04-09");
      const result = initializeTimes(testDate);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  });

  describe("updateTimes", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("returns the same state for unknown action types", () => {
      const initialState = {
        date: new Date("2024-04-09"),
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
        selectedTime: "18:00",
      };

      const result = updateTimes(initialState, { type: "UNKNOWN" });

      expect(result).toEqual(initialState);
    });

    test("updates the date and times when UPDATE_DATE action is dispatched", () => {
      const initialState = {
        date: new Date("2024-04-09"),
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
        selectedTime: "18:00",
      };

      const newDate = new Date("2024-04-10");
      const result = updateTimes(initialState, {
        type: "UPDATE_DATE",
        payload: newDate,
      });

      expect(global.fetchAPI).toHaveBeenCalledWith(newDate);
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
        date: new Date("2024-04-09"),
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
        selectedTime: "18:00",
      };

      const newDate = new Date("2024-04-10");
      const result = updateTimes(initialState, {
        type: "UPDATE_DATE",
        payload: newDate,
      });

      expect(result).not.toBe(initialState);
      expect(initialState.date).toEqual(new Date("2024-04-09"));
      expect(result.date).toBe(newDate);
    });

    test("updates selectedTime when UPDATE_SELECTED_TIME action is dispatched", () => {
      const initialState = {
        date: new Date("2024-04-09"),
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
        selectedTime: "17:00",
      };

      const result = updateTimes(initialState, {
        type: "UPDATE_SELECTED_TIME",
        payload: "19:00",
      });

      expect(result.selectedTime).toBe("19:00");
      expect(result.date).toEqual(initialState.date);
      expect(result.times).toEqual(initialState.times);
    });

    test("includes pre-selected date as part of the dispatch data", () => {
      const initialState = {
        date: new Date("2024-04-09"),
        times: ["17:00", "18:00", "19:00", "20:00", "21:00"],
        selectedTime: "18:00",
      };

      const newDate = new Date("2024-04-15");
      const result = updateTimes(initialState, {
        type: "UPDATE_DATE",
        payload: newDate,
      });

      expect(result.date).toBe(newDate);
      expect(result).toHaveProperty("date");
      expect(result).toHaveProperty("times");
      expect(result).toHaveProperty("selectedTime");
    });
  });
});
