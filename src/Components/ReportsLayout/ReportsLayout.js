import React, { useEffect, useState } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {  
    const [doctors, setDoctors] = useState([]);  

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


 
const DoctorLine = ({ name, speciality, index}) => {
    return (
        <>
        <div>{index}</div>
        <div>{name}</div>
        <div>{speciality}</div>
        <div><a href='/medical_report.pdf' rel="noreferrer" target="_blank" className='btn2'>View Report</a></div>
        <div><a href="/medical_report.pdf" download="medical_report.pdf"  className='btn2'>Download Report</a></div>
        </>
    );
}         

 return (
        <div>
            <div className="container">
                <div className="reports-text">
                    <h2>Reports</h2>
                </div>
                <br />
                <div className="reports-grid">

                        <div className='tr'><strong>S.No</strong></div>
                        <div className='tr'><strong>Doctor Name</strong></div>
                        <div className='tr'><strong>Doctor Speciality</strong></div>
                        <div className='tr'><strong>View Report</strong></div>
                        <div className='tr'><strong>Download Report</strong></div>
                    {doctors.map((doctor, index) => (
                        <DoctorLine 
                            key={index} 
                            name={doctor.name} 
                            speciality={doctor.speciality} 
                            index={index + 1} 
                            onClick=''
                        />
                    ))}
                </div>
            </div>
        </div>

    );


};


export default ReportsLayout;