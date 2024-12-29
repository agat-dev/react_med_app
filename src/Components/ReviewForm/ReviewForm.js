// import components
import './ReviewForm.css' ;


function ReviewForm() {


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

                        <div>1</div>
                        <div>Dr. John Doe</div>
                        <div>Cardiology</div>
                        <div><button className='btn2'>Give a review</button></div>
                        <div></div>

                        <div>2</div>
                        <div>Dr. Jane Smith</div>
                        <div>Dermatology</div>
                        <div><button className='btn2'>Give a review</button></div>
                        <div></div>

                </div>
            </div>
        </div>

    );

}

export default ReviewForm;