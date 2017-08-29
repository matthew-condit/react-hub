import React, {Component} from 'react';
import ActiveUsersWidget  from './activeUsersWidget/activeUsersWidget';
import {newMessage, sendMessage, newUser, userLeft, signin} from '../../socketService';

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
        });
        userLeft((err, users) => {
            this.setState({users});
        });
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

    addMessage(e) {
        e.preventDefault();

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

    handleTextOnChange(event) {
        this.setState({
            newMessage: event.target.value
        })
    }

    checkEnter(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            console.log('add message');
            this.addMessage();
        }
    }

    handleNameInput(event) {
        this.setState({
            userName: event.target.value
        });
    }

    submitName(e) {
        e.preventDefault();
        this.setState({
            nameGiven: true
        });
        signin({
            id: Math.random() * 1000000,
            userName: this.state.userName
        })
    }

    _getTime(timestamp) {
        const date = new Date(timestamp);
        if (date.toLocaleDateString() === new Date().toLocaleDateString()) {
            return date.toLocaleTimeString();
        }
        return date.toLocaleString();
    }


    render() {

        let messageHtml = this.state.messages.map((message, index) => {
            return (
                <div key={index} className="messages__message">
                    <div className="text"> {message.text}</div>
                    <div className="userName">{message.user.userName}</div>
                    <div className="timestamp">{this._getTime(message.timestamp)}</div>
                </div>
            );
        });
        if (this.state.nameGiven) {
            return (
                <div className="message-board-widget">
                    <ActiveUsersWidget users={this.state.users}/>
                    <div className="messages-wrapper">
                        <form onSubmit={this.addMessage.bind(this)} className="message__send-message-wrapper">
                            <div><textarea rows="1" value={this.state.newMessage} onKeyDown={this.checkEnter.bind(this)}
                                           onChange={this.handleTextOnChange.bind(this)} placeholder="Send Messages...">

                            </textarea></div>
                            <button type="submit" className="send-button">Send</button>
                        </form>
                        <div className="old-messages"> { messageHtml }</div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="message-board-widget-login">
                    <div className="login-wrapper">
                        <h2>Welcome to the chat room</h2>
                        <form onSubmit={this.submitName.bind(this)}>
                            <input type="text" value={this.state.userName} onChange={this.handleNameInput.bind(this)}
                                   placeholder="John Doe"/>
                            <button type="submit" className="submit-button">Sign in!</button>
                        </form>
                    </div>
                </div>
            )
        }

    }
}

export default MessageBoardWidget;