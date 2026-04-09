import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const { availableTimes } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the reservation data to a server
    alert(
      `Reservation submitted:\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nOccasion: ${occasion}`,
    );
  };

  return (
    <form
      className="form-grid"
      // style={{ maxWidth: "200px" }}
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose available time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select time</option>
          {Array.isArray(availableTimes) &&
            availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group form-group--full">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

      <div className="form-group form-group--full">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div className="form-group form-group--full ">
        <input
          type="submit"
          value="Make Your reservation"
          className="button--submit"
        />
      </div>
    </form>
  );
};

export default BookingForm;
