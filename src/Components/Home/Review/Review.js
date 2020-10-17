import React, { useEffect } from 'react';
import { useState } from 'react';
import './Review.css';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://creative-agency-kba.herokuapp.com/review')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h3 className="text-black m-auto pt-5 pb-5" style={{ textAlign: 'center' }}>Client <span style={{ color: '#7AB259' }}>Feedback</span></h3>
            <div className="d-flex justify-content-center mt-5 pt-5 mb-5">
                <section className="row w-75">
                    {
                        review.map(feedback => <div className="col-md-4 feedback  " key={feedback._id}>
                            <div className="feedback-area">
                                <div className="d-flex justify-content-center name-area ">
                                    <img src={feedback.image} className="img-fluid d-flex justify-content-center service-image mr-2 " alt="" />
                                    <h4>{feedback.name} <br /> <span className="profession">{feedback.profession}</span> </h4>
                                </div>

                                <p className="comment-area">{feedback.comment}</p>
                            </div>

                        </div>)
                    }
                </section>
            </div>
        </div>
    );
};

export default Review;