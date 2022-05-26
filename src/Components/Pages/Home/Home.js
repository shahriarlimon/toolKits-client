import React from 'react';
import BussinessSummary from './BussinessSummary';
import Carosel from './Carosel';
import ContactUs from './ContactUs';
import Newsletter from './Newsletter';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Carosel/>
           <Tools/>
           <BussinessSummary/>
           <Reviews/>
          <Newsletter/>
          <ContactUs/>
         
        </div>
    );
};

export default Home;