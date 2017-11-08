import React, {Component} from 'react';
import './todoWidget.css';
import TodoItem from './todoItem/todoItem.js';


const PRIORITIES = {
    HIGH: 5,
    NORMAL: 3,
    LOW: 1
};

class TodoWidget extends Component {


    constructor(props) {
        super(props);
        let originalTodos = [
            {
                goal: "Grill turkey",
                completed: false,
                priority: PRIORITIES.NORMAL,
                id: 0
            },
            {
                goal: "Hang out with Annie",
                completed: false,
                priority: PRIORITIES.HIGH,
                id: 1
            },
            {
                goal: "Watch Silicon Valley",
                completed: false,
                priority: PRIORITIES.NORMAL,
                id: 2
            }
        ].sort((a, b) => {
            return a.priority < b.priority
        });

        this.state = {
            todos: originalTodos,
            newTodo: {
                goal: "",
                priority: PRIORITIES.NORMAL
            }
        };

    }

    _createTodo(newTodoObj, completed = false) {
        return {
            goal: newTodoObj.goal,
            completed: completed,
            priority: newTodoObj.priority,
            id: Math.floor(Math.random() * 100000)
        }
    };

    componentWillMount() {
    }


    componentDidMount() {
    }

    onChange(event) {
        let newTodo = this.state.newTodo;
        newTodo.goal = event.target.value;
        this.setState({
            newTodo: newTodo
        })
    }

    addTodo(event) {
        let updatedTodos =
            this.state.todos.concat([this._createTodo(this.state.newTodo, false)])
                .sort((a, b) => {
                    return a.priority < b.priority
                });
        console.log(updatedTodos);
        this.setState({
            todos: updatedTodos,
            newTodo: {
                goal: "",
                priority: PRIORITIES.NORMAL
            }
        });

    }

    updateNewPriority(event) {
        let newTodo = this.state.newTodo;
        newTodo.priority = event.target.value;
        this.setState({
            newTodo: newTodo
        })
    }


    render() {
        const todoList = this.state.todos.map((todo) => {
            return (
                <TodoItem key={todo.id} todo={todo}/>
            )
        });


        return (
            <div className="todo-widget">
                <div className="todo-widget-content">
                    <div className="todo-input">
                        <select value={this.state.newTodo.priority}
                                onChange={this.updateNewPriority.bind(this)}
                                className="select">
                            <option value={PRIORITIES.NORMAL}>Normal</option>
                            <option value={PRIORITIES.HIGH}>High</option>
                            <option value={PRIORITIES.LOW}>Low</option>
                        </select>
                        <input type="text" value={this.state.newTodo.goal} onInput={this.onChange.bind(this)}/>
                        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
                    </div>
                    <div className="todo-items">
                        {todoList}
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoWidget;