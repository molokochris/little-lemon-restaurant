import Footer from "./Footer";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import { useState } from "react";

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

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
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
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
