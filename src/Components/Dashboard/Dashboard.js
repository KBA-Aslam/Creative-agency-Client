import React from 'react';
import DashNav from '../Shared/DashNav/DashNav';
import Navbar from '../Home/Navbar/Navbar';

const Dashboard = () => {

    return (
        <section className='ClientDashboard'>
            <div className='row'>
                <DashNav></DashNav>
                <div className="col-md-10 p-0">
                    <Navbar></Navbar>
                    <div className='order-container p-4'>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;