import { useLocation, useParams } from "react-router-dom";
import Nav from "./Nav";

const ConfirmedBooking = () => {
  //   const { date, time, guests, occasion } = useParams();
  const { state } = useLocation();
  console.log("reservationDetails:", state);
  return (
    <div>
      <Nav />
      <h2>Booking Confirmed</h2>
      <p>Thank you for your reservation!</p>
      {/* <p>
        <strong>Name:</strong> {reservationDetails.name}
      </p> */}
      <p>
        <strong>Date:</strong> {state.reservationDetails.date}
      </p>
      <p>
        <strong>Time:</strong> {state.reservationDetails.time}
      </p>
      <p>
        <strong>Guests:</strong> {state.reservationDetails.guests}
      </p>
      <p>
        <strong>Occasion:</strong> {state.reservationDetails.occasion}
      </p>
    </div>
  );
};

export default ConfirmedBooking;
