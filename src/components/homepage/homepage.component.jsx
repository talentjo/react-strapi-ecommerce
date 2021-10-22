import React from 'react';
import CustomButton from '../custombutton/custombutton.component';
import ShopData from '../shopdata/shopdata.component';

import rateActive from '../../assets/images/rate-active.svg';
import rateimg from '../../assets/images/rate.svg';

import './homepage.styles.scss';
const data = [1,2,3,4,5,6,7,8,9,0]
const HomePage = () => {

    return (
    <div>
        <div className='section123'>
        </div>
        <div className='column1'>
            <h1>Welcome to Isidio!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed 
                molestie malesuada maqnis leo sed purus et.
            </p>
            <div className='BtnGroup'>
                <CustomButton style={{color:'white'}}>ABOUT US</CustomButton>
                <CustomButton style={{background:'#FFFFFF', color: '#002B11'}}>SHOP</CustomButton>
            </div>
        </div>
        <div className='press'>
            <img src={rateActive} alt='rateActive' className='rateimg'/>
            <img src={rateimg} alt='rateimg' className='rateimg' />
            <img src={rateimg} alt='rateimg' className='rateimg' />
            <img src={rateimg} alt='rateimg' className='rateimg'/>
            <img src={rateimg} alt='rateimg' className='rateimg'/>
            <img src={rateimg} alt='rateimg' className='rateimg'/>
        </div>
        <h1 style={{marginTop:'50px'}}>Category name: </h1>
        <div className='shopdata'>
            {data.map((idx, prop) => <ShopData key={idx} />)}
        </div>  
    </div>
)};

export default HomePage;