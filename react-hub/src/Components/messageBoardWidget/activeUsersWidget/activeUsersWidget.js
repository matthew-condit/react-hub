import React, { Component } from 'react';

import './activeUsersWidget.css';

class ActiveUsersWidget extends Component {

    constructor(props) {
        super(props);
        console.error(props);
    }

    render() {
        let userHtml = this.props.users.map((user, index) => {
            return (
                <div key={index}>{user.userName}</div>
            );
        });
        return (
            <div className="active-users-widget">
                { userHtml }
            </div>
        )
    }
}

export default ActiveUsersWidget;