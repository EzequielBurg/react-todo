import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { blue, red, green, purple } from '@material-ui/core/colors';
import './TodoCard.css'

export default function TodoCard(props) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      background: purple[50],
      borderRadius: '15px'
    },
  
    done: {
      fontFamily: 'Verdana',
      color: blue[800],
    },
  
    todo: {
      fontFamily: 'Verdana',
      color: red[500]
    },
  
    all: {
      fontFamily: 'Verdana',
      color: green[400]
    }
  });

  const [done, setDone] = useState(0)
  const [todo, setTodo] = useState(0)
  const [all, setAll]   = useState(0)
  
  function setValues({ todos }) {
    setAll(todos.length)
    let nDone = 0
    let nTodo = 0
    // eslint-disable-next-line array-callback-return
    todos.map(todo => {
      if (todo.done){
        nDone++
      }
      else {
        nTodo++
      }
    })

    setDone(nDone)
    setTodo(nTodo)
  }

  useEffect(() => {
    setValues(props)
  })
  
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        
      <div className="geral">
        <h2 className="done">{done}</h2>
        <Typography variant="h5" component="h2" className={classes.done}>
          Done
        </Typography>
      </div>
    
      <br/>
        <div className="geral">
          <h2 className="todo">{todo}</h2>
          <Typography variant="h5" component="h2" className={classes.todo}>
            To Do
          </Typography>
        </div>
      <br/>
      
      <div className="geral">
        <h2 className="all">{all}</h2>
        <Typography variant="h5" component="h2" className={classes.all}>
          All Todos
        </Typography>
      </div>
    
      </CardContent>
    </Card>
  )
}
