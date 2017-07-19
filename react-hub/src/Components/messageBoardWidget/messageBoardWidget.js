import React, {Component} from 'react';
import {newMessage, sendMessage} from '../../socketService';

import './messageBoardWidget.css';

class MessageBoardWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: ""
        };

        //subsribe
        newMessage((err, messages) => {
            this.setState({messages});
        });
    }

    componentWillMount() {
    }


    componentDidMount() {
        this.getMessage();

    }

    getMessage() {
        fetch('/messages')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    messages: data.messages
                });
                console.log('messages', data.messages);
            })

    }

    addMessage() {
        console.log(this.state.newMessage);

        sendMessage(this.state.newMessage);

        this.setState({
            newMessage: ""
        });

        // fetch('/messages/add',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             message: this.state.newMessage
        //         })
        //     }).then(() => {
        //     console.log("here");
        //     this.getMessage();
        //     this.setState({
        //         newMessage: ""
        //     })
        // });
    }

    handleText(event) {
        this.setState({
            newMessage: event.target.value
        })
    }


    render() {

        let messageHtml = this.state.messages.map((message, index) => {
            return (
                <div key={index}>{message.text}</div>
            );
        });
        return (
            <div className="message-board-widget">
                <input type="text" value={this.state.newMessage} onChange={this.handleText.bind(this)}/>
                <button onClick={this.addMessage.bind(this)}>Send Message</button>
                <div> { messageHtml }</div>
            </div>
        )
    }
}

export default MessageBoardWidget;