import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core/'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoCard from '../components/TodoCard'
import { getTodos, setTodo, removeTodo, doneTodo } from '../resources/todo'
import './App.css'

export default function App() {
  const [todos, setTodos] = useState([])

  async function loadData() {
    const { data } = await getTodos()
    setTodos(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleCreate = async title => await setTodo(title).then(() => loadData())

  const handleDelete = async id => await removeTodo(id).then(() => loadData())

  const handleDone   = async (id, done) => await doneTodo(id, done).then(() => loadData()) 

  return (
    <div>
      <Container maxWidth="lg">
        <div className="content">
          <div className="content-card">
            <Grid item xs={12}>
              <Typography variant="h2" component="h1">
                Infos
              </Typography>
              <TodoCard todos={todos}/>
            </Grid>
          </div>
          <div className="content-todo">
            <Container maxWidth="sm" spacing={3}>
              <Grid>
              
                <Grid item xs={12}>
                  <Typography variant="h2" component="h1">
                    Todo App
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <TodoForm handleCreate={handleCreate}/>
                </Grid>

                <Grid item xs={12}>
                  <TodoList todos={todos} handleDelete={handleDelete} handleDone={handleDone}/>
                </Grid>

              </Grid>
            </Container>
          </div>
        </div>
      
      </Container>
    </div>
  );
}
