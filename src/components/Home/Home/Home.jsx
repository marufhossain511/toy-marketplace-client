import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Shop from '../Shop/Shop';
import Speciality from '../Speciality/Speciality';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Shop></Shop>
            <Speciality></Speciality>
        </div>
    );
};

export default Home;