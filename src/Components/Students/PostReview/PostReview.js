import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import DashNav from '../../Shared/DashNav/DashNav';
import Navbar from '../../Home/Navbar/Navbar';
import './PostReview.css'

const PostReview = () => {
   const[user, setUser]=useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        const image = user.photo;
        const totalData = {...data,image}
        fetch("https://creative-agency-kba.herokuapp.com/addReview", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(totalData)
        })
            .then(result => {
                if (result) {
                    alert('Thank you for your valuable Review')

                }
            })
    }
    return (
        <section className='ClientDashboard'>
        <div className='row'>
            <DashNav></DashNav>
            <div className="col-md-10 p-0">
                <Navbar></Navbar>
                <div className='review-container order-container p-4'>
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-1">
                            <input ref={register} placeholder="Your name" className='form-control mb-3' type="text" name="name" id="" required />
                            <input ref={register} placeholder="Company's name, Designation" className='form-control mb-3' type="text" name="profession" id="" required />
                            <textarea ref={register} placeholder='Project Detail' name="comment" id="" cols="30" rows="8" className="form-control mb-3" required />
                            <input type="submit" className="bg-dark text-white"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default PostReview;