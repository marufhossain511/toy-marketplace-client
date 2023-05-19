import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Shop from '../Shop/Shop';
import Speciality from '../Speciality/Speciality';
import useTitle from '../../../Hooks/useTitle';
import CustomersReview from '../CustomersReview/CustomersReview';

const Home = () => {
    useTitle('| Home')
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Shop></Shop>
            <Speciality></Speciality>
            <CustomersReview></CustomersReview>
        </div>
    );
};

export default Home;