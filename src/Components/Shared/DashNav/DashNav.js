import React from 'react';
import logo from '../../../images/logos/logo.png'
import './DashNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserPlus, faHdd, faShoppingCart, faCommentDots,faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const DashNav = () => {
    const [user, setUser] = useContext(UserContext)

    const history = useHistory()
    const signOut=()=>{
        setUser({})
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('admin')
        history.push('/')
    }
    return (
        <aside className='col-md-2 sideNav text-center p-0'>
            <div className="container">
                <img className='my-4' onClick={() => history.push('/')} src={logo} width='150' alt="" />
                <ul className='list-unstyled text-left ml-4 mt-4'>
                    {
                        user.isAdmin ?
                            <>

                                <NavLink to='/adminServiceList'
                                    aboutProps={'Services List'}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3' >
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faHdd} /> <span>Service list</span>
                                    </li>
                                </NavLink>

                                <NavLink to='/addService'
                                    aboutProps={'Add Service'}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3'
                                    >
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faPlus} /> <span>Add Service</span>
                                    </li>
                                </NavLink >
                                <NavLink to='/makeAdmin'
                                    aboutProps={'Make Admin'}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3'>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faUserPlus} /> <span>Make Admin</span>
                                    </li>
                                </NavLink>
                                <li className='mb-3'onClick={signOut} >
                                    <FontAwesomeIcon className='mr-2'  style={{ fontSize: '18px' }} icon={faSignInAlt} /> <span>Sign out</span>
                                </li>



                            </>
                            :
                            <>
                                <NavLink to='/order'
                                    aboutProps={'Order'}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3'>
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faShoppingCart} /> <span>Order</span>
                                    </li>

                                </NavLink>

                                <NavLink to='/clientServiceList'
                                    aboutProps={'Your Order'}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3' >
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faHdd} /> <span>Service list</span>
                                    </li>

                                </NavLink>

                                <NavLink to='/review'
                                    activeStyle={{
                                        fontWeight: "bold",
                                        paddingBottom: '0px',
                                        borderBottom: '3px solid #7AB259',
                                        textDecoration: 'none',
                                        color: '#009444'
                                    }}>
                                    <li className='mb-3' >
                                        <FontAwesomeIcon className='mr-2' style={{ fontSize: '18px' }} icon={faCommentDots} /> <span>Review</span>
                                    </li>
                                </NavLink>
                                <li className='mb-3'onClick={signOut} >
                                    <FontAwesomeIcon className='mr-2'  style={{ fontSize: '18px' }} icon={faSignInAlt} /> <span>Sign out</span>
                                </li>

                            </>
                    }
                </ul>
            </div>
        </aside>
    );
};

export default DashNav;