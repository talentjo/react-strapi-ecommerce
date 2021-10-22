import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/nav.component';
import './header.styles.scss';
import LogoImg from '../../assets/images/logo.svg';

const Header = () => (
    <div className='header'>
        <div className="container">
            <Link className='logo-text' to='/'>
                <img src={LogoImg} alt='logoimg' style={{width:'60px', height: '54px', zIndex: '1000'}} />
            </Link>
            <Nav/>
        </div>
    </div>
);

export default Header;