import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { Routes, NavHeader } from './components/authComponents/authComponents';
import index from './components/index/indexComponent';

import notFound from './components/index/notFound';
import LoginComponent from './views/loginComponent/loginComponent';
import WeatherWidget from './components/weatherWidget/weatherWidget';
import TrafficWidget from './components/trafficWidget/trafficWidget';
import MbtaWidget from './components/mbtaWidget/mbtaWidget';
import MessageBoardWidget from './components/messageBoardWidget/messageBoardWidget';
import TodoWidget from './components/todoWidget/todoWidget';


const AuthComponent = ({match}) => (
    <div>
        <Route path={match.url + "/login"} component={LoginComponent}/>
    </div>
);

class App extends Component {

    constructor(props) {
        super(props);
        const authenticated = false;
        this.state = {
            authenticated
        };
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <NavHeader authenticated={this.state.authenticated}/>
                        <Routes/>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}


export default App;
