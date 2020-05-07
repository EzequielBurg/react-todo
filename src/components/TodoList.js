import React, { Component } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core'
import './TodoList.css'

export default class TodoList extends Component {
    handleRemove = id => this.props.handleDelete(id)

    handleToggle = id => {
        const { todos, handleDone } = this.props
        const toggleTodo = todos.filter(todo => todo.id === id)
        let doneTodo
        toggleTodo.map(todo => todo.done ? doneTodo = false : doneTodo = true)
        handleDone(id, doneTodo)
    }

    render() {
        
        return (
            <List>
                {
                    this.props.todos.map((todo, index) => (
                        <ListItem key={index} button>
                            {
                                todo.done ? <div className="done-info"><ListItemText primary={todo.title}/></div> : <ListItemText primary={todo.title}/>
                            }
                            <ListItemSecondaryAction>
                                <Button color="primary" onClick={() => this.handleToggle(todo.id)}>Done</Button>
                                <Button color="secondary" onClick={() => this.handleRemove(todo.id)}>Delete</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
            </List>
        )

    }
}
