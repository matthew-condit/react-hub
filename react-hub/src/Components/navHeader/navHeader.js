import React from 'react';
import {NavLink} from 'react-router-dom';

import './navHeader.css';

const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props}/>
    );
};

const navHeader = (props) => (
    <div className='navHeader'>
        <WrappedNavLink to='/login'>Login</WrappedNavLink>
        <WrappedNavLink to='/logout'>Logout</WrappedNavLink>
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