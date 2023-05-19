import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-4 sm:mx-32 my-20'>
            <h2 className='text-3xl text-center font-bold mb-10'>Bl<span className='text-primary'>ogs</span></h2>
           <div className='mb-10'>
                <h1 className='text-xl text-primary font-bold'>Q:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='font-normal'>Ans:An access token is a credential that is used to authenticate and authorize requests to access protected resources, such as APIs or web services. It is typically a string of characters issued by an authentication server upon successful authentication.On the other hand, a refresh token is a credential used to obtain a new access token once the previous access token expires. Refresh tokens have a longer lifespan and are used to request a new access token without needing the user to re-enter their credentials. They provide a more secure and seamless way to maintain authentication sessions.</p> 
           </div>
           <div className='mb-10'>
                <h1 className='text-xl text-primary font-bold'>Q:Compare SQL and NoSQL databases?</h1>
                <p className='font-normal'>Ans:SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON 
                </p> 
           </div>
           <div className='mb-10'>
                <h1 className='text-xl text-primary font-bold'>Q:What is express js? What is Next JS ?</h1>
                <p className='font-normal'>Ans:js and Express. js are two different frameworks that are used to build different sets of applications. While ExpressJs is a Node. js-based web application framework to build APIs and server-side applications, NextJs on the other hand is a react-based framework used for creating static websites and SEO optimizations.
                </p> 
           </div>
           <div className='mb-10'>
                <h1 className='text-xl text-primary font-bold'>Q:What is MongoDB aggregate and how does it work? What is Next JS ?</h1>
                <p className='font-normal'>Ans:Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p> 
           </div>
        </div>
    );
};

export default Blogs;