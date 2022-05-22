import React from 'react';
import BussinessSummary from './BussinessSummary';
import Carosel from './Carosel';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Carosel/>
           <Tools/>
           <BussinessSummary/>
        </div>
    );
};

export default Home;