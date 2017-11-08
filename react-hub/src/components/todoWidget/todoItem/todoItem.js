import React, { Component } from 'react';
import './todoItem.css';

class TodoItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            goal: props.todo.goal,
            completed: props.todo.completed
        }

    }


    componentWillMount() {
        // console.log("myHeader(), componentWillmount()");
    }


    componentDidMount() {
    }

    toggleCompleted() {
        this.setState({
            completed: !this.state.completed
        })
    }


    render() {
        return (
            <div className={"todo-item " + (this.state.completed ? "todo-item--completed": "")}>
                <input type="checkbox" value={this.state.completed} onChange={this.toggleCompleted.bind(this)}/>
                <p>{this.state.goal}</p>
            </div>
        )
    }
}

export default TodoItem;