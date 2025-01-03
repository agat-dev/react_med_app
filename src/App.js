import './App.css';
import './Components/Navbar/Navbar.css'
// Import necessary modules from React library
import React from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm'
import GiveReviews from './Components/ReviewForm/GiveReviews';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {sessionStorage.getItem('hasNewAppointment') === 'false' ? null : (() => {       
                return <Notification />;
                })()}          
            {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>          
            <Route path="/instant-consultation" element={<InstantConsultation/>}/>    
            <Route path="/reviews" element={<ReviewForm/>}/>                 
            <Route path="/feedback" element={<GiveReviews/>}/>  
            <Route path="/reports" element={<ReportsLayout />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
