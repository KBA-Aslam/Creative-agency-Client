import React from 'react';
import './Header.css'
import bg from '../../../images/logos/Frame.png'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className=" head-body">
            <div className="container head-body"> 
            <Navbar></Navbar>
        <section className="row  mt-5 pt-5">
            <div className="col-md-5 col-sm-10 offset-md-1">
                <h1 style={{color: "#111430"}}>
                    Lets's Grow Your <br />
                    Brand To The <br />
                    Next Level
                </h1>
                <p> Lorem ipsum dolor, sit amet <br/>
                 consectetur adipisicing elit. Cum ipsum <br/>
                  impedit ab, nostrum et libero? </p>
                <Link to="/login">
                <button className="btn btn-dark">Hire Us</button>
                </Link>
               
            </div>
            <div className="col-md-5 col-sm-10 ">
                
                <img src={bg} className="img-fluid" alt="" />
            </div>

        </section>
        </div>
        </div>
    );
};

export default Header;