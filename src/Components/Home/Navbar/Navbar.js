import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/logos/logo.png';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <div>
        <Link className="navbar-brand"  to="/home">
            <img style={{width: "200px", height: "60px"}} src={logo} alt=""/>
        </Link>
        </div>
        <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link text-dark" to="home">Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-link text-dark" to="donate">Our Portfolio</Link>
                <Link className="nav-link text-dark" to="blog">Our Team</Link>
                <Link  className="nav-link text-dark" to="event">Contruct Us</Link>
                <Link to="admin" className="nav-link text-dark">
                    <button type="button" className="btn btn-dark">Admin</button>
                </Link>
            </div>
        </div>
        </div>
    </nav>
    );
};

export default Navbar;