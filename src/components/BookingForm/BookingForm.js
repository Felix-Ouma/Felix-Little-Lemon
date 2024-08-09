import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: defaultTime,
    guests: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'date') {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 10;

  return (
    <form id="booking-form" onSubmit={(e) => { e.preventDefault(); onFormSubmit(e, formValues); }}>
      <div className="form-field">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            value={formValues.mobile}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            name="time"
            value={formValues.time}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            value={formValues.guests}
            onChange={handleInputChange}
            min={minGuest}
            max={maxGuest}
          />
        </div>
        <div className="form-field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={handleInputChange}
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <input type="submit" name="submit" value="Book" />
      </div>
    </form>
  );
};

export default BookingForm;
