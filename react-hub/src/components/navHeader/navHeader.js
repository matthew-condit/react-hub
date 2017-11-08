import React from 'react';
import {NavLink} from 'react-router-dom';

import '../authComponents/navHeader.css';
import LoginComponent from "../../views/loginComponent/loginComponent";

const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props}/>
    );
};




const navHeader = (props) => (
    <div className='navHeader'>
        <WrappedNavLink to='/auth/login'>Login</WrappedNavLink>
        <WrappedNavLink to='/auth/logout'>Logout</WrappedNavLink>
        <WrappedNavLink exact to='/' >Home</WrappedNavLink>
        <WrappedNavLink to='/messages'>Messages</WrappedNavLink>
        <WrappedNavLink to='/weather'>Weather</WrappedNavLink>
        <WrappedNavLink to='/todos'>Todos</WrappedNavLink>
        <WrappedNavLink to='/news'>News</WrappedNavLink>
        <WrappedNavLink to='/traffic'>Traffic</WrappedNavLink>
        <WrappedNavLink to='/transit'>MBTA</WrappedNavLink>
    </div>
);
export default navHeader;