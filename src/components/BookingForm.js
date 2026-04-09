import { useState } from "react";

const BookingForm = ({ times, selectedTime, dispatch, submitForm }) => {
  const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [errors, setErrors] = useState({});

  // Get today's date in YYYY-MM-DD format for date validation
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Validation functions
  const validateDate = (dateValue) => {
    if (!dateValue) {
      return "Date is required";
    }
    const selectedDate = new Date(dateValue);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return "Date must be today or in the future";
    }
    return "";
  };

  const validateTime = (timeValue) => {
    if (!timeValue) {
      return "Time is required";
    }
    return "";
  };

  const validateGuests = (guestsValue) => {
    const guestCount = parseInt(guestsValue, 10);
    if (!guestsValue || guestCount < 1) {
      return "Number of guests must be at least 1";
    }
    if (guestCount > 10) {
      return "Number of guests cannot exceed 10";
    }
    return "";
  };

  const validateOccasion = (occasionValue) => {
    if (!occasionValue) {
      return "Occasion is required";
    }
    return "";
  };

  // Check if form is valid without updating state (safe to call during render)
  const checkFormIsValid = () => {
    const dateError = validateDate(date);
    const timeError = validateTime(selectedTime);
    const guestsError = validateGuests(guests);
    const occasionError = validateOccasion(occasion);

    return !dateError && !timeError && !guestsError && !occasionError;
  };

  // Validate all fields and update error state (called on submit)
  const validateAndSetErrors = () => {
    const dateError = validateDate(date);
    const timeError = validateTime(selectedTime);
    const guestsError = validateGuests(guests);
    const occasionError = validateOccasion(occasion);

    const newErrors = {};
    if (dateError) newErrors.date = dateError;
    if (timeError) newErrors.time = timeError;
    if (guestsError) newErrors.guests = guestsError;
    if (occasionError) newErrors.occasion = occasionError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({
      type: "UPDATE_DATE",
      payload: new Date(newDate),
    });
    // Validate on change
    const dateError = validateDate(newDate);
    setErrors((prev) => ({
      ...prev,
      date: dateError || undefined,
    }));
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    dispatch({
      type: "UPDATE_SELECTED_TIME",
      payload: newTime,
    });
    // Validate on change
    const timeError = validateTime(newTime);
    setErrors((prev) => ({
      ...prev,
      time: timeError || undefined,
    }));
  };

  const handleGuestsChange = (e) => {
    const newGuests = e.target.value;
    setGuests(newGuests);
    // Validate on change
    const guestsError = validateGuests(newGuests);
    setErrors((prev) => ({
      ...prev,
      guests: guestsError || undefined,
    }));
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
    // Validate on change
    const occasionError = validateOccasion(newOccasion);
    setErrors((prev) => ({
      ...prev,
      occasion: occasionError || undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAndSetErrors()) {
      return;
    }
    const formData = {
      date,
      time: selectedTime,
      guests,
      occasion,
    };
    console.log("formdata:", formData);
    submitForm(formData);
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
          min={getTodayDate()}
          onChange={handleDateChange}
          title="Please select today or a future date"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
          required
        />
        {errors.date && (
          <span id="date-error" style={{ color: "red", fontSize: "0.875rem" }}>
            {errors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose available time</label>
        <select
          id="res-time"
          value={selectedTime || ""}
          onChange={handleTimeChange}
          title="Please select an available time slot"
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
          required
        >
          <option value="" disabled={date !== ""}>
            Select time
          </option>
          {Array.isArray(times) &&
            times.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
        </select>
        {errors.time && (
          <span id="time-error" style={{ color: "red", fontSize: "0.875rem" }}>
            {errors.time}
          </span>
        )}
      </div>

      <div className="form-group form-group--full">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          step="1"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          title="Please enter a number between 1 and 10 guests"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          required
        />
        {errors.guests && (
          <span
            id="guests-error"
            style={{ color: "red", fontSize: "0.875rem" }}
          >
            {errors.guests}
          </span>
        )}
      </div>

      <div className="form-group form-group--full">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {errors.occasion && (
          <span
            id="occasion-error"
            style={{ color: "red", fontSize: "0.875rem" }}
          >
            {errors.occasion}
          </span>
        )}
      </div>

      <div className="form-group form-group--full ">
        <input
          type="submit"
          value="Make Your reservation"
          className="button--submit"
          onClick={handleSubmit}
          disabled={!checkFormIsValid()}
          title={
            !checkFormIsValid()
              ? "Please fill out all required fields correctly"
              : ""
          }
        />
      </div>
    </form>
  );
};

export default BookingForm;
