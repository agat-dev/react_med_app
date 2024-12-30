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
        const reviewData = { index, name };
        localStorage.setItem('reviewData', JSON.stringify(reviewData));
        setFormData({
            doctorIndex: index,
            doctorName: name,
        });
    };

 
const DoctorLine = ({ name, speciality, review, index, doctorName }) => {
    return (
        <>
        <div>{index}</div>
        <div>{name}</div>
        <div>{speciality}</div>
        <div><a href='/feedback' className='btn2' onClick={() => handleFeedbackClick(index + 1, name)}>Give a review</a></div>
        <div>{review ? review : ''}</div>
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
