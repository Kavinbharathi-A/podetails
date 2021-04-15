import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Courses from './Courses'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 50,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginRight: theme.spacing(70)
    
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
          
      <AppBar position="static" color="secondary">
      
        <Toolbar >
        <Typography className={classes.title} variant="h3" noWrap>
                  Kongu Engineering College
        </Typography>
          
          <Typography variant="h6">
          <IconButton className={classes.toolbar}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <Button renderAs="button" color="link">
                    <span>Home</span>
                    </Button>
                    </Link>
          </IconButton>
          <IconButton className={classes.toolbar}>
                    <Link to="/Courses" style={{ textDecoration: 'none'}}>
                    <Button renderAs="button"  color="Link" >
                    <span>Course</span>
                    </Button>
                    </Link>
          </IconButton>
          <IconButton className={classes.toolbar}>
                    <Link to="/Courses" style={{ textDecoration: 'none'}}>
                    <Button renderAs="button"  color="Link" >
                    <p>Contact</p>
                    </Button>
                    </Link>
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}