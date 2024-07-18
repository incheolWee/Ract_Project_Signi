import React from 'react';
import '../css/Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#author">Author</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;