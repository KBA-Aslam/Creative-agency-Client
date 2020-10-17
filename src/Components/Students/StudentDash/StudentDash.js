import React, { useState } from 'react';
import './StudentDash.css'
import DashNav from '../../Shared/DashNav/DashNav';
import Navbar from '../../Home/Navbar/Navbar';
import AddAdmin from '../../Admin/AddAdmin/AddAdmin';
import AdminService from '../../Admin/AdminService/AdminService';
import AddService from '../../Admin/AddService/AddService';
import Orders from '../Orders/Orders';
import ServiceList from '../ServiceList/ServiceList';
import PostReview from '../PostReview/PostReview';

const StudentDash = () => {
    const isAdmin = false
    const [navManu, setNavManu] = useState(isAdmin ? 'Admin Service list' : 'Order')
    return (
        <section className='CustomerDashboard'>
            <div className='row'>
                <DashNav navManu={navManu} setNavManu={setNavManu} isAdmin={isAdmin} />
                <div className="col-md-10 p-0">
                    <Navbar/>
                    {
                        isAdmin ?
                            <>
                                {navManu === 'Add Service' && <AddService />}
                                {navManu === 'Admin Service list' && <AdminService />}
                                {navManu === 'Make Admin' && <AddAdmin />}
                            </>
                            :
                            <>
                                {navManu === 'Order' && <Orders />}
                                {navManu === 'Service list' && <ServiceList />}
                                {navManu === 'Review' && <PostReview/>}
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default StudentDash;
