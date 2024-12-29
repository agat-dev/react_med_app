import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

  
    const handleFormSubmit = (e) => {
     e.preventDefault();
     const appointmentData = {
        doctorName,
        doctorSpeciality,
        name,
        phoneNumber,
        selectedSlot,
      };
      localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
      setSelectedSlot('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="timeSlot">Time Slot:</label>
            <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                required
                >
                <option selected disabled value="">choose</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
            </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
