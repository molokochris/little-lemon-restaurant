import { useState } from "react";

const BookingForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  let timeOptions = props.availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the reservation data to a server
    alert(
      `Reservation submitted:\nName: ${fullName}\nEmail: ${email}\nDate: ${date}\nTime: ${availableTime}\nGuests: ${guests}\nOccasion: ${occasion}`,
    );
  };

  return (
    <form id="reservation-form" className="form-grid">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        {/* <select
          id="Time"
          name="Time"
          value={availableTime}
          onChange={(e) => setAvailableTime(e.target.value)}
          required
        >
          {timeOptions}
        </select> */}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          type="time"
          value={availableTime}
          onChange={(e) => setAvailableTime(e.target.value)}
          required
        >
          {timeOptions}
        </select>
      </div>

      <div className="form-group form-group--full">
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          placeholder="1–20"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <div className="form-group form-group--full">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <div className="form-group form-group--full">
        <button
          type="submit"
          className="button button--submit"
          onClick={handleSubmit}
        >
          Submit Reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
