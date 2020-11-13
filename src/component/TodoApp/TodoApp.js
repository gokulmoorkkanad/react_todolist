import React, { Component } from 'react'
import './TodoApp.css'

export default class TodoApp extends Component {

    render() {
        return (
            <div className="todo-container">
                <h1>ToDo App</h1>
                <div classname="input-section">
                    <input type="text"/>
                    <button>Add</button>
                </div>
                <ul>
                    <li>item</li>
                </ul>
            </div>
        )
    }
}
