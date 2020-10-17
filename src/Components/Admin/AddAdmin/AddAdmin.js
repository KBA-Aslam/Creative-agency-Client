import React from 'react';
import { useForm } from 'react-hook-form';
import DashNav from '../../Shared/DashNav/DashNav';
import Navbar from '../../Home/Navbar/Navbar';
import './AddAdmin.css'

const AddAdmin = () => {
    
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        fetch('https://creative-agency-kba.herokuapp.com/AddAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result){
                    alert('Admin added successfully')
                }
            })
    }
    return (

        <section className='ClientDashboard'>
            <div className='row'>
                <DashNav></DashNav>
                <div className="col-md-10 p-0">
                    <Navbar></Navbar>
                    <div className='MakeAdmin p-4'>
                        <div className="service-form p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p className="m-0">Email</p>
                                <input required ref={register} type="email" placeholder='name@gmail.com' name="email" id="" className="form-control" />
                                <button className="btn btn-success ml-2 px-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AddAdmin;