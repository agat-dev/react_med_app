import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './GiveReviews.css'
// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showModal, setShowModal] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData(
        { 
            username: formData.name,
            review: formData.review,
            rating: formData.rating
        });
        const formContent = {            
            username: formData.name,
            review: formData.review,
            rating: formData.rating
        }
    localStorage.setItem('reviewData', formContent);



    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <Popup
      style={{ backgroundColor: '#FFFFFF' }}
      modal
      open={showModal}
      onClose={() => setShowModal(false)}
    >
    <div className='give-reviews-container'>
      <h2>Form with Message</h2>
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
          <div>
              <label htmlFor="rating">Rating:</label>
              <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
    </Popup>
  );
}
export default GiveReviews;