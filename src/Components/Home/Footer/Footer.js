import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className="row foot head-body">

            <div className="col-md-4 offset-md-2 mt-5" style={{ color: 'black' }}>
                <h2>Let Us handle your <br />
            problems, Professionally.
             </h2>
                <p style={{ color: ' rgba(0, 0, 0, 0.7)' }}>With well written codes,we build amazing apps for all platforms,mobile and web apps general</p>
            </div>
            <div className="col-md-5 mt-5">
                <form className='form-group'>
                    <input style={{ height: '70px' }} placeholder='Your email address' className='form-control mb-3' type="text" name="" id="" />
                    <input style={{ height: '70px' }} placeholder='Your name / Company’s name' className='form-control mb-3' type="text" name="" id="" />
                    <textarea style={{ height: '270px' }} placeholder='Your message' className='form-control mb-3' type="text" name="" id="" />
                    <button style={{ width: '170px' }} className="btn btn-dark px-5">Send</button>
                </form>
            </div>
            <p style={{marginLeft:"45%"}}><small className="text-secondary">copyright KBA Academy 2020</small></p>
        </div>
    );
};

export default Footer;