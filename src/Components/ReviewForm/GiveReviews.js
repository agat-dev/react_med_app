// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './GiveReviews.css'

// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showModal, setShowModal] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const existingReviews = JSON.parse(localStorage.getItem('reviewData')) || [];
  console.log(existingReviews);
  const [formData, setFormData] = useState({
    name: existingReviews.length > 0 ? existingReviews[0].name : '',
    key: existingReviews.length > 0 ? existingReviews[0].index : '',
    username: '',
    review: '',
    rating: 0, 
  });


  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const updatedReviews = existingReviews.map(review => 
      review.key === formData.key ? { ...review, [e.target.name]: e.target.value } : review
    );
    localStorage.setItem('reviewData', JSON.stringify(updatedReviews));
    };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    const reviewData = {
      docname: existingReviews.name,
      key: existingReviews.index,
      username: formData.name,
      review: formData.review,
      rating: formData.rating
    };
    localStorage.setItem('reviewData', JSON.stringify(reviewData));
    setFormData({
      docname: existingReviews.name,
      key: existingReviews.index,
      username: '',
      review: '',
      rating: 0
    });
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
            <input type="text" id="name" name="name" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
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
          <p>Name: {submittedMessage.name}</p>
          <p>Review: {submittedMessage.review}</p>
          <p>Rating: {submittedMessage.rating}</p>
        </div>
      )}
    </div>
    </Popup>
  );
}

export default GiveReviews;
