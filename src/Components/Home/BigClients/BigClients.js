import React from 'react';
import './BigClients.css'
import com1 from '../../../images/logos/slack.png'
import com2 from '../../../images/logos/google.png'
import com3 from '../../../images/logos/uber.png'
import com4 from '../../../images/logos/netflix.png'
import com5 from '../../../images/logos/airbnb.png'

const BigClients = () => {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5 mb-5 container">
            <div className="col-md-2 col-sm-4">
                <img  src={com1} className="img-fluid big-image" alt=""/>
            </div>
            <div className="col-md-2 col-sm-4">
                <img  src={com2} className="img-fluid big-image" alt=""/>
            </div>
            <div className="col-md-2 col-sm-4">
                <img  src={com3} className="img-fluid big-image" alt=""/>
            </div>
            <div className="col-md-2 col-sm-4">
                <img  src={com4} className="img-fluid big-image" alt=""/>
            </div>
            <div className="col-md-2 col-sm-4">
                <img  src={com5} className="img-fluid big-image" alt=""/>
            </div>
        </div>
    );
};

export default BigClients;