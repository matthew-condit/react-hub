import React, { Component } from 'react';
import './todoWidget.css';
import TodoItem from './todoItem/todoItem.js';

class TodoWidget extends Component {


    constructor(props) {
        super(props);

        this.state = {
            todos: [
                this._createTodo("Grill turkey"),
                this._createTodo("Hang out with Annie"),
                this._createTodo("Watch Silicon Valley")
            ],
            newTodo: ""
        };

    }

    _createTodo(text, completed = false) {
        return {
            goal: text,
            completed: completed
        }
    };

    componentWillMount() {
        console.log("myHeader(), componentWillmount()");
    }


    componentDidMount() {
    }

    onChange(change) {
        console.log(change);
    }





    render() {
        return (
            <div className="todo-widget">
                <div className="todo-input">
                    <input type="text" value={this.state.newTodo} onChange={this.onChange.bind(this)} />
                </div>
                <div className="todo-items">
                    {
                        this.state.todos.map((todo, index) => {
                            return (
                                <TodoItem key={index} todo={todo} />
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default TodoWidget;