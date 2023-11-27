import React from 'react';
import TopHeader from './Components/TopHeader';
import MainHeader from './Components/MainHeader';

function Header () {
    return (
        <header class="header_area">
            <TopHeader />
            <MainHeader />
        </header>
    );
};

export default Header;
