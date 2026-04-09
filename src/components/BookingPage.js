import Footer from "./Footer";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";

const BookingPage = () => {
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

  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  return (
    <>
      <title>Little Lemon - Book a Table</title>
      <div className="layout-container">
        <Nav />
        <main className="col-span-12">
          <section id="reservation-section">
            <div className="reservation-card">
              <h1>Reserve a Table</h1>
              <p className="reservation-subtitle">
                Book your spot at Little Lemon — we'll see you soon.
              </p>

              <BookingForm
                availableTimes={state.times}
                setAvailableTimes={(times) =>
                  dispatch({ type: "UPDATE_TIMES", payload: times })
                }
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BookingPage;
