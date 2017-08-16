import React, {Component} from 'react';
import ActiveUsersWidget  from './activeUsersWidget/activeUsersWidget';
import {newMessage, sendMessage, newUser, signin} from '../../socketService';

import './messageBoardWidget.css';

class MessageBoardWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: "",
            userName: "",
            nameGiven: false,
            users: []
        };

        //subsribe
        newMessage((err, messages) => {
            this.setState({messages});
        });
        newUser((err, users) => {
            this.setState({users});
        })
    }

    componentWillMount() {
    }


    componentDidMount() {
        this.getMessage();
        this.getUsers();

    }

    getMessage() {
        console.log('getMessages');
        fetch('/messages')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    messages: data.messages
                });
            })

    }

    addMessage() {
        console.log(this.state.newMessage);

        sendMessage(this.state.newMessage, this.state.userName);

        this.setState({
            newMessage: ""
        });
    }

    getUsers() {
        fetch('/messages/users')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data.users
                })
            })
    }

    handleText(event) {
        this.setState({
            newMessage: event.target.value
        })
    }

    handleNameInput(event) {
        this.setState({
            userName: event.target.value
        });
    }

    submitName() {
        this.setState({
            nameGiven: true
        });
        signin({
            id: Math.random() * 1000000,
            userName: this.state.userName
        })
    }

    _getTime(timestamp) {

    }



    render() {

        let messageHtml = this.state.messages.map((message, index) => {
            return (
                <div key={index} className="messages__message">
                    <div className=""> {message.text}</div>
                    <div className="">{message.user.userName}</div>
                    <div className="">{this._getTime(message.timestamp)}</div>
                </div>
            );
        });
        if (this.state.nameGiven) {
            return (
                <div className="message-board-widget">
                    <ActiveUsersWidget users={this.state.users}/>
                    <div className="messages-wrapper">
                        <input type="text" value={this.state.newMessage} onChange={this.handleText.bind(this)}/>
                        <button onClick={this.addMessage.bind(this)}>Send Message</button>
                        <div> { messageHtml }</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="message-board-widget">
                    <div className="login-wrapper">
                        <div>What's your name?</div>
                        <input type="text" value={this.state.userName} onChange={this.handleNameInput.bind(this)}/>
                        <button onClick={this.submitName.bind(this)}>Let's message board!</button>
                    </div>
                </div>
            )
        }

    }
}

export default MessageBoardWidget;