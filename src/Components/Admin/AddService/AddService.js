import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './AddService.css'
import { useForm } from 'react-hook-form';
import DashNav from '../../Shared/DashNav/DashNav';
import Navbar from '../../Home/Navbar/Navbar';

const AddService = () => {
    const [file, setFile] = useState(null)
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', data.name)
        formData.append('description', data.description)

        fetch('https://creative-agency-kba.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('service added successfully')
            })
    }
    return (
        <section className='ClientDashboard'>
            <div className='row'>
                <DashNav></DashNav>
                <div className="col-md-10 p-0">
                    <Navbar></Navbar>
                    <div className='AddService p-5'>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
                            <div className="service-form row p-4">
                                <div className="col-md-6">
                                    <p className='m-0'>Service Title</p>
                                    <input required ref={register} className='form-control mb-4' name='name' type="text" />
                                    <p className='m-0'>Description</p>
                                    <textarea required ref={register} className='form-control' name="description" id="" cols="30" rows="5"></textarea>
                                </div>
                                <div className="col-md-6">
                                    <p className='m-0'>Icon</p>
                                    <input onChange={e => setFile(e.target.files[0])} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                                    <label htmlFor="uploadImg" className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                                </div>
                            </div>
                            <button className="btn btn-success mt-3 px-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;