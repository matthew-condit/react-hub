import React from 'react';
import {NavLink} from 'react-router-dom';
import {Router, Switch, Route} from 'react-router';
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
            </div>
        )
    } else {
        return (
            <div className='navHeader'>
                <WrappedNavLink to='/auth/logout'>Logout</WrappedNavLink>
                <WrappedNavLink exact to='/'>Home</WrappedNavLink>
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

const Routes = (props) => {
    return (
        <div>
            <Route exact path="/" component={props.indexComponent}/>
            <Route path="/messages" component={props.messagesComponent}/>
            <Route path="/todos" component={props.todoComponent}/>
            <Route path="/weather" compontent={props.weatherComponent}/>
            <Route path="/traffic" compontent={props.trafficComponent}/>
            <Route path="/transit" compontent={props.metroComponent}/>
            <Route path='/auth' component={props.authComponent}/>
        </div>
    )
};


export {
    NavHeader,
    Routes
};