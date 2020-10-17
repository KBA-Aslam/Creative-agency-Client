import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import AdminService from './Components/Admin/AdminService/AdminService';
import ServiceList from './Components/Students/ServiceList/ServiceList';
import PostReview from './Components/Students/PostReview/PostReview';
import Orders from './Components/Students/Orders/Orders';
import AddService from './Components/Admin/AddService/AddService';



export const UserContext = createContext()
export const ServiceContext= createContext()


function App() {

  const[selectService,setSelectservice]= useState({});
  const [user, setUser] = useState({
    name:'',
    email:'',
    photo:'',
    isAdmin: false
  })

  return (
    <UserContext.Provider value={[user, setUser]}>
    <ServiceContext.Provider value={[selectService,setSelectservice]}>
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
       <Login></Login>
        </Route>
        <PrivateRoute path="/orders">
        <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/serviceList">
      <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute path="/review">
      <PostReview></PostReview>
        </PrivateRoute>
        <PrivateRoute path="/addService">
      <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
      <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/AddAdmin">
      <AddAdmin></AddAdmin>
        </PrivateRoute>
        <PrivateRoute path="/adminService">
      <AdminService></AdminService>
      </PrivateRoute>
      <Route exact path="/">
      <Home></Home>
        </Route>
      </Switch>
    </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
