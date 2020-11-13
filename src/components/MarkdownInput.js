import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const marked = require('marked');

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: '15px',
      display: 'flex',
      height: '80vh',
      justifyContent: 'center',
      
    },
    output: {
        textAlign: 'left'
    },
  }));

export default function MarkdownInput() {
    const classes = useStyles();

    const [markdownInput, setMarkdownInput] = useState('')

    const onChangHandler = (event) => {
        setMarkdownInput(event.target.value)
    }

    return (
        <div>
            <Grid container className={classes.container}>
                <Grid item xs={10}>
                <TextField
                    multiline
                    fullWidth
                    rows={4}
                    id="outlined-basic"
                    label="Input markdown"
                    variant="outlined"
                    onChange={onChangHandler}
                />
                <Paper className={classes.output}>
                    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdownInput) }}></div>
                </Paper>
                </Grid>
            </Grid >
      </div >

    );
}