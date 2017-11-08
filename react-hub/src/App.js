import React, {Component} from 'react';
import {Router, Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import index from './Components/index/indexComponent';
import notFound from './Components/index/notFound';
import NavHeader from './Components/navHeader/navHeader';
import LoginComponent from './views/loginComponent/loginComponent';
import WeatherWidget from './Components/weatherWidget/weatherWidget';
import TrafficWidget from './Components/trafficWidget/trafficWidget';
import MbtaWidget from './Components/mbtaWidget/mbtaWidget';
import MessageBoardWidget from './Components/messageBoardWidget/messageBoardWidget';
import TodoWidget from './Components/todoWidget/todoWidget';

// import HangmanWidget from './Components/hangmanWidget/hangmanWidget';

const AuthComponent = ({match}) => (
    <div>
        <Route path={match.url + "/login"} component={LoginComponent}/>
    </div>
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <NavHeader/>
                        <div>
                            <Route exact path="/" component={index}/>
                            <Route path="/messages" component={MessageBoardWidget}/>
                            <Route path="/todos" component={TodoWidget}/>
                            <Route path="/weather" compontent={WeatherWidget}/>
                            <Route path="/traffic" compontent={TrafficWidget}/>
                            <Route path="/transit" compontent={MbtaWidget}/>
                            <Route path='/auth' component={AuthComponent}/>
                        </div>
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}


export default App;
