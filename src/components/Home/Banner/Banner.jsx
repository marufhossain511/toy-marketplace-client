import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[60vh]" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/three-boxes-full-toys_1308-37294.jpg?size=626&ext=jpg&ga=GA1.2.452690373.1680190369&semt=ais")` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl  font-extrabold">Welcome to ToyMan</h1>
            <p className="mb-5">where imagination comes to life! Explore our wide range of playful and educational toys for children. From classic favorites to the latest innovative creations</p>
            </div>
        </div>
        </div>
    );
};

export default Banner;