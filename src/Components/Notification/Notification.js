// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './Notification.css'

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [doctorSpeciality, setDoctorSpeciality] = useState(null);
  const [AppointmentDate, setAppointmentDate] = useState(null);

  const [appointmentData, setAppointmentData] = useState(null);

  const [showModal, setShowModal] = useState(true);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('name');
  // Retrieve stored appointment time and date from localStorage
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));
    
    const doctorData = storedAppointmentData.doctorName;
    const doctorSpeciality = storedAppointmentData.doctorSpeciality;
    const AppointmentDate = storedAppointmentData.selectedSlot;

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
        }
    
    // Set appointment time and date state if they exist
    if (doctorSpeciality) {
        setDoctorSpeciality(doctorSpeciality);
      }

    if (AppointmentDate) {
        setAppointmentDate(AppointmentDate);
    }
    if (storedUsername) {
      setAppointmentData(prevData => ({ ...prevData, userName: storedUsername }));
    }

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (doctorData) {
      setDoctorData(doctorData);
    }
    // Set appointmentData state if storedDoctorSpeciality exists
    if (doctorSpeciality) {
       setDoctorSpeciality(doctorSpeciality);
      }
    // Set appointmentData state if storedAppointmentDate exists
    if (AppointmentDate) {
        setAppointmentDate(AppointmentDate);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <Popup
    className='notif_popup'
    modal
    open={showModal}
    onClose={() => setShowModal(false)}
    >
    <div>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                {/* Display doctor's name from doctorData */}
                <div><strong>Doctor:</strong> {doctorData} </div>
                <div><strong>Speciality:</strong> {doctorSpeciality} </div>
                <div><strong>Time slot:</strong> {AppointmentDate} </div>
                <div><strong>Name:</strong>{username}          </div>       
                
              </p>
            </div>
          </div>
        </>
      )}
    </div>  
    </Popup>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;