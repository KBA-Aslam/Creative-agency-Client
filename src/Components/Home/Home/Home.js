import React from 'react';
import BigClients from '../BigClients/BigClients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import TopWorks from '../TopWorks/TopWorks';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BigClients></BigClients>
            <Services></Services>
            <TopWorks></TopWorks> 
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;