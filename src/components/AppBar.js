import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    justifyContent: "flex-start",
  },
  home: {
    
    color: "white",
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Markdown Previewer
          </Typography>
          <IconButton 
                edge="end"
                id="nav-home"
                className={classes.home}
                target="_blank"
                href="http://www.leightonv.co.nz"
            >
                <HomeIcon color="inherit"> </HomeIcon>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}