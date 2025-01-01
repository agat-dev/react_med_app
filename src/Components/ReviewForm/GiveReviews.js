import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './GiveReviews.css'

// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });


  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    localStorage.setItem(reviewerName, formData.name);
    localStorage.setItem(reviewText, formData.review);    
    localStorage.setItem(reviewRating, formData.rating);
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      window.location.href = '/reviews'; // Redirect to /reviews after submitting
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className='give-reviews-container'>
      <h2>Form with Message</h2>
      {!showForm ? (
        // Display button to open the form
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
          
          <p>Name: {submittedMessage.username}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
  );
}
export default GiveReviews;