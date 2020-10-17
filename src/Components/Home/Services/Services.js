import React, { useEffect } from 'react';
import { useState } from 'react';
import './Services.css'
import spin from '../../../images/load-spin.gif'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { ServiceContext } from '../../../App';


const Services = () => {

    const [services, setServices] = useState([]);
    const [AddService, setAddService] = useContext(ServiceContext)


    useEffect(() => {
        fetch('https://creative-agency-kba.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    const history = useHistory()
    const handleService = (service) => {
        const serviceChoose = {
            serviceName: service.name,
            serviceDescription: service.description,
            sImage: service.image.img
        }
        setAddService(serviceChoose)
        history.push('/orders')

    }

    useEffect(()=>{
        fetch('https://creative-agency-kba.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return (
        <div className="mt-t pt-5  mb-5">
            <h2 className="text-center mb-5">Provide awsome <span style={{ color: '#7AB259' }}>services</span> </h2>
            <div className="d-flex justify-content-center  mt-t pt-5">
                <section className="row w-75">
                    {
                        services.length === 0 ? <img src={spin} className="img-fluid" alt="" /> : services.map(service => <div onClick={() => { handleService(service) }} className="col-md-4 service p-5" key={service._id}>
                            <img src={service.image} className="img-fluid d-flex justify-content-center service-image " alt="" />
                            <div style={{ margin: 'auto', textAlign: 'center' }}>
                                <h5 >{service.title}</h5>
                                <p >{service.description}</p>
                            </div>
                        </div>)
                    }

                </section>
            </div>
        </div>
    );
};

export default Services;