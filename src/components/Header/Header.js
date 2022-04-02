import React from 'react';

import CustomLink from '../CustomLinks/CustomLinks';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to our online shop</h1>
            <nav className="navbar">
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview' >Order Review</CustomLink>
            </nav>
        </div>
    );
};

export default Header;