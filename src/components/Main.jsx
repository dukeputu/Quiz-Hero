import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';


const Main = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;