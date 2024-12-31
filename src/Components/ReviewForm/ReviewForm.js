// import components
import './ReviewForm.css' ;
import React, { useState } from 'react'

function ReviewForm() {     
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState([]);  

    const getDoctors = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
           .then(res => res.json())
           .then(data => {               
                setDoctors(data);
           })      
           .catch(err => console.log(err));
       }

    React.useEffect(() => {
        getDoctors();
    }, []);


    const handleFeedbackClick = (index, name) => {
        const reviewDoc = { index, name };
        //create const reviewDoc with session storage data of reveiwDoc or an empty object
        const reviewData = JSON.parse(sessionStorage.getItem('reviewData')) || {};
        sessionStorage.setItem('reviewDoc', JSON.stringify(reviewDoc));

        // set a pastReviewData object in local storage with the reviewData and reviewDoc data
        const pastReviewData = { reviewData, reviewDoc };
        localStorage.setItem('pastReviewData', JSON.stringify(pastReviewData));
                // remove the review data from session storage
        sessionStorage.removeItem('reviewData');
        setFormData({
            doctorIndex: index,
            doctorName: name,
        });
    };

 
const DoctorLine = ({ name, speciality, review, index }) => {     
    const reviewDoc = JSON.parse(sessionStorage.getItem('reviewDoc')) || {};
    const reviewData = JSON.parse(sessionStorage.getItem('reviewData')) || {};
    const pastReviewData = JSON.parse(localStorage.getItem('pastReviewData')) || {};

    return (
        <>
        <div>{index}</div>
        <div>{name}</div>
        <div>{speciality}</div>
        <div>
        {pastReviewData.reviewDoc && pastReviewData.reviewDoc.name === name ? (
          <span className='btn2 inactive'>Review Submitted</span>
        ) : (
          <a href='/feedback' className='btn2' onClick={() => handleFeedbackClick(index + 1, name)}>Give a review</a>
        )}
      </div>        
      <div>      

      {(pastReviewData.reviewDoc.name === name ? pastReviewData.reviewData.review : reviewDoc.name === name ? reviewData.review : '')}
        </div>        
        </>
    );
}       

    return (
        <div>
            <div className="container">
                <div className="reviews-text">
                    <h2>Reviews</h2>
                </div>
                <br />
                <div className="reviews-grid">

                        <div className='tr'><strong>S.No</strong></div>
                        <div className='tr'><strong>Doctor Name</strong></div>
                        <div className='tr'><strong>Doctor Speciality</strong></div>
                        <div className='tr'><strong>Provide Feedback</strong></div>
                        <div className='tr'><strong>Given Reviews</strong></div>
                    {doctors.map((doctor, index) => (
                        <DoctorLine 
                            key={index} 
                            name={doctor.name} 
                            speciality={doctor.speciality} 
                            review={doctor.review} 
                            index={index + 1} 
                            onClick=''
                        />
                    ))}
                </div>
            </div>
        </div>

    );

}


export default ReviewForm;
