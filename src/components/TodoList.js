import React, {  } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@material-ui/core'
import './TodoList.css'

export default function TodoList({ todos, handleDelete, handleDone })  {
    const handleRemove = id => handleDelete(id)

    const handleToggle = id => {
        const toggleTodo = todos.filter(todo => todo.id === id)
        let doneTodo
        toggleTodo.map(todo => todo.done ? doneTodo = false : doneTodo = true)
        handleDone(id, doneTodo)
    }

    return (
        <List>
            {
                todos.map((todo, index) => (
                    <ListItem key={index} button>
                        {
                            todo.done ?
                            <div className="done-info"><ListItemText primary={todo.title}/></div> :
                            <ListItemText primary={todo.title}/>
                        }
                        <ListItemSecondaryAction>
                            <Button color="primary" onClick={() => handleToggle(todo.id)}>Done</Button>
                            <Button color="secondary" onClick={() => handleRemove(todo.id)}>Delete</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            }
        </List>
    )
}