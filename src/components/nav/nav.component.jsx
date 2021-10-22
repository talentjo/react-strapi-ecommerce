import React from 'react';
import {Link } from 'react-router-dom';
import shopImg from '../../assets/images/shop.svg';

import './nav.styles.scss';

const Nav = () => (
    <div className="nav">
        <Link className='nav-link active' to='/'>
            <label>About</label>
        </Link>
        <Link className='nav-link' to='/'>
            <label>Shop</label>
        </Link>
        <Link className='nav-link' to='/'>
            <label>Contact</label>
        </Link>
        
        <Link className='nav-link' to='/'>
            <img src={shopImg} alt='shopimg' style={{  }}/>
        </Link>
        
    </div>
);

export default Nav;