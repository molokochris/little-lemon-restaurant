import Footer from "./Footer";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();

  const initializeTimes = (date) => {
    // eslint-disable-next-line no-undef
    const availableTimes = fetchAPI(date);
    console.log("available times:", availableTimes);
    return availableTimes;
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_DATE":
        const newTimes = fetchAPI(action.payload); // eslint-disable-line no-undef
        console.log("Date changed:", action.payload, "Times:", newTimes);
        return { ...state, date: action.payload, times: newTimes };
      case "UPDATE_SELECTED_TIME":
        return {
          ...state,
          selectedTime: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(
    updateTimes,
    initializeTimes(new Date()),
  );

  const submitForm = (formData) => {
    console.log("formdata from bookingpage:", formData);
    try {
      // eslint-disable-next-line no-undef
      const result = submitAPI(formData);
      if (result) {
        navigate("/confirmed-booking", {
          state: { reservationDetails: formData },
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
                times={state.times}
                selectedTime={state.selectedTime}
                dispatch={dispatch}
                submitForm={submitForm}
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
