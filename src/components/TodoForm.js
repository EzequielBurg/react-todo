import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core/'

const TodoForm = ({ handleCreate }) => {
    const [value, setValue] = useState('')

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    const handleSubmit = async (value) => {
        handleCreate(value)
        setValue('')
    }
    
    return (
        <form>
            <Grid item xs={12}>
                <TextField id="title" name="title" label="Title" margin="normal" value={value} onChange={handleChange} fullWidth variant="outlined"/>
            </Grid>
            
            <Grid item xs={12}>
                <br></br>
                <div id="button">
                    <Button color="primary" variant="contained"  id="button"  onClick={() => handleSubmit(value)}>Create</Button>
                </div>
            </Grid>
            <br></br>
        </form>
    )
}

export default TodoForm
