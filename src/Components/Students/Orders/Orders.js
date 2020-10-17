import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './Orders.css'
import { ServiceContext, UserContext } from '../../../App';
import DashNav from '../../Shared/DashNav/DashNav';
import Navbar from '../../Home/Navbar/Navbar';


const Orders = () => {
    const [user, setUser] = useContext(UserContext)
    const [selectService, setSelectservice] = useContext(ServiceContext)
    console.log(selectService)
    const { register, handleSubmit } = useForm()
    
    const [file, setFile] = useState(null)
    const onSubmit = data => {
        let status='pending'
        const formData = new FormData()
        formData.append('fileOne', file)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('work', data.work)
        formData.append('details', data.details)
        formData.append('price', data.price)
        formData.append('status', status)

        fetch('https://creative-agency-kba.herokuapp.com/addStudent', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Congrats! Your order is Done')
            })
    }
    return (
        <section className='ClientDashboard'>
            <div className='row'>
                <DashNav></DashNav>
                <div className="col-md-10 p-0">
                    <Navbar></Navbar>
                    <div className='order-area p-4'>
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)} className="orderForm-area form-group pt-3">
                                <input required ref={register} placeholder="Your name / company's name" defaultValue={user.name} className='form-control mb-3' type="text" name="name" id="" />
                                <input required ref={register} placeholder='Your email address' defaultValue={user.email} className='form-control mb-3' type="email" name="email" id="" />
                                <input required ref={register} placeholder='what service do you want?' defaultValue={selectService.serviceName} className='form-control mb-3' type="text" name="work" id="" />
                                <textarea required ref={register} placeholder='Project Detail' defaultValue={selectService.serviceDescription} name="details" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                                <input  ref={register} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                                <p className='m-0'>Icon</p>
                                <input onChange={e => setFile(e.target.files[0])} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                                <label htmlFor="uploadImg" className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload project file</label>

                                <br />
                                <button className="btn btn-dark ">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders;