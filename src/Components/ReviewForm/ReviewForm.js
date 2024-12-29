// import components
import './ReviewForm.css' ;
import React, { useState } from 'react'

function ReviewForm() {     
    const [doctors, setDoctors] = useState([]);

    const getDoctors = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
           .then(res => res.json())
           .then(data => {               
                data.map( doctor => doctors.setDoctors)
           })      
           .catch(err => console.log(err));
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
                        <div className='tr'><strong>Review Given</strong></div>

                        

                </div>
            </div>
        </div>

    );

}

const DoctorLine = ({ name, speciality, review }, {key}) => {
    name = doctors.name;
    speciality = doctors.speciality;
    review = doctors. review;
    key = doctors.key;

    return (
        <>
        <div>{key}</div>
        <div>{name}</div>
        <div>{speciality}</div>
        <div><a href='/feedback' className='btn2'>Give a review</a></div>
        <div>{review ? review : null}</div>
        </>
    );
}


export default ReviewForm;