import React from 'react';
import TopHeader from './Components/TopHeader';
import MainHeader from './Components/MainHeader';

function Header () {
    return (
        <header className="header_area">
            <TopHeader />
            <MainHeader />
        </header>
    );
};

export default Header;
