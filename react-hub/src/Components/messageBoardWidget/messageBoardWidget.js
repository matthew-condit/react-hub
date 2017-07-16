import React, {Component} from 'react';

import './messageBoardWidget.css';

class MessageBoardWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            newMessage: ""
        };
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
                    message: data.message
                });
                console.log(data.message);
            })

    }

    addMessage() {
        fetch('/messages/add',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: this.state.newMessage
                })
            }).then(()=> {
            console.log("here");
            this.getMessage();
            this.setState({
                newMessage: ""
            })
            });
    }

    handleText(event) {
        this.setState({
            newMessage : event.target.value
        })
    }



    render() {
        return (
            <div className="message-board-widget">
                <input type="text" onChange={this.handleText.bind(this)} />
                <button onClick={this.addMessage.bind(this)}>Send Message</button>
                <div>{ this.state.message }</div>
            </div>
        )
    }
}

export default MessageBoardWidget;