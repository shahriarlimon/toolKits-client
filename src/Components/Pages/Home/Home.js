import React from 'react';
import BussinessSummary from './BussinessSummary';
import Carosel from './Carosel';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Carosel/>
           <Tools/>
           <BussinessSummary/>
           <Reviews/>
        </div>
    );
};

export default Home;