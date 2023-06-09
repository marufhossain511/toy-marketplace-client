import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCard from './ShopCard';
const Shop = () => {
    const [marvels,setMarvel]=useState([])
    const [avengers,setAvengers]=useState([])
    const [starWars,setStarWars]=useState([])
    useEffect(()=>{
        fetch('https://toys-marketplace-server-pi.vercel.app/getToysByCategory/marvel')
        .then(res=>res.json())
        .then(data=>{
            setMarvel(data)
        })
    },[])
    useEffect(()=>{
        fetch('https://toys-marketplace-server-pi.vercel.app/getToysByCategory/avengers')
        .then(res=>res.json())
        .then(data=>{
            setAvengers(data)
        })
    },[])
    useEffect(()=>{
        fetch('https://toys-marketplace-server-pi.vercel.app/getToysByCategory/starwars')
        .then(res=>res.json())
        .then(data=>{
            setStarWars(data)
        })
    },[])

    return (
        <div className='sm:mx-20'>
            <h1 className='text-5xl font-bold text-center my-10'>Shop By Category</h1>    
        <Tabs>
        <TabList>
            <Tab>Marvel</Tab>
            <Tab>Avengers</Tab>
            <Tab>Star Wars</Tab>
        </TabList>
            <TabPanel>
             <div className='my-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
                marvels.map(marvel=><ShopCard
                key={marvel._id}
                data={marvel}
                ></ShopCard>)
             }
             </div>
            </TabPanel>
            <TabPanel>
            <div className='my-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
                avengers.map(marvel=><ShopCard
                key={marvel._id}
                data={marvel}
                ></ShopCard>)
             }
             </div>
            </TabPanel>
            <TabPanel>
            <div className='my-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
                starWars.map(marvel=><ShopCard
                key={marvel._id}
                data={marvel}
                ></ShopCard>)
             }
             </div>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default Shop;