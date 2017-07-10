import React, {Component} from 'react';

import './messageBoardWidget.css';

class MessageBoardWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
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
        fetch('/message',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                })
            })
    }

    render() {
        return (
            <div className="message-board-widget">
                <div>{ this.state.message }</div>
            </div>
        )
    }
}

export default MessageBoardWidget;