import React from 'react';
import {NavLink} from 'react-router-dom';
import './navHeader.css';



const WrappedNavLink = (props) => {
    return (
        <NavLink className='nav-link' activeClassName='nav-link--active' {...props}/>
    );
};

const NavHeader = ({authenticated}) => {
    if (authenticated) {
        return (
            <div className='navHeader'>
                <WrappedNavLink to='/auth/login'>Login</WrappedNavLink>
                <WrappedNavLink to='/auth/logout'>Logout</WrappedNavLink>
            </div>
            )
    } else {
        return (
            <div className='navHeader'>
                <WrappedNavLink exact to='/' >Home</WrappedNavLink>
                <WrappedNavLink to='/messages'>Messages</WrappedNavLink>
                <WrappedNavLink to='/weather'>Weather</WrappedNavLink>
                <WrappedNavLink to='/todos'>Todos</WrappedNavLink>
                <WrappedNavLink to='/news'>News</WrappedNavLink>
                <WrappedNavLink to='/traffic'>Traffic</WrappedNavLink>
                <WrappedNavLink to='/transit'>MBTA</WrappedNavLink>
            </div>
        )
    }
};

const AuthentifiedRoutes = (props) => {
    return (

    );
};


import './navHeader.css';
import LoginComponent from "../../views/loginComponent/loginComponent";






const navHeader = (props) => (

);
export default navHeader;