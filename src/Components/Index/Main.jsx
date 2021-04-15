import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
/*import CameraIcon from '@material-ui/icons/PhotoCamera';*/
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { blueGrey } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dept from '../Department/Dept_be';
import Courses from './Courses'
export default function Album() {
 
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        
        <div >
          <Container maxWidth="sm">
          
            <Typography variant="h2" align="center" color="textPrimary" >
              Passed Outs
            </Typography>  

            <Grid container spacing={2} justify="center" >
            <Grid item justify="center">
            <img src="https://th.bing.com/th/id/R5628f22724f7683f59612c37723331c6?rik=ICKPajSPFfQLlg&riu=http%3a%2f%2fwww.kongu.ac.in%2fwebalbum%2fimg%2fkec.JPG&ehk=RL4t2485yFddVEROx6db8DYvKJdbp4JJU6nBzDCIa6o%3d&risl=&pid=ImgRaw" width="1200px"/>
            </Grid>
            </Grid>
          </Container>
        </div>
        
      </main>
      <br></br>
      
      <Link to="/Courses" style={{paddingLeft: 13, textDecoration: 'none'}}>
      <Button renderAs="button" variant="contained" color="Link">
      <span>Course</span>
      </Button>
      </Link>
      
    </React.Fragment>
  );
}

