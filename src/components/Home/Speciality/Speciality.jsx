import React, { useEffect, useState } from 'react';
import SpecialityCard from './SpecialityCard';

const Speciality = () => {
    const [specialities,setSpecialitities]=useState([])
    useEffect(()=>{
        fetch('speciality.json')
        .then(res=>res.json())
        .then(data=>{
            setSpecialitities(data)
        })
    },[])
    return (
        <div >
            <h2 className='text-4xl font-bold text-center mb-6'>Our Speciality</h2>
            <p className='font-medium text-xl text-center mb-6'>Award-winning Toy Seller of Atlassian, our ToyMan shop has over 10 <br /> years of combined experience in the Atlassian ecosystem.</p>
            <div className='grid sm:mx-20  my-10 sm:grid-cols-2 gap-4'>
                {
                    specialities.map((speciality,idx)=><SpecialityCard
                    key={idx}
                    speciality={speciality}
                    ></SpecialityCard>)
                }
            </div>
        </div>
    );
};

export default Speciality;