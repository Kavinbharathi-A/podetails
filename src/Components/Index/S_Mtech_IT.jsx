import React from 'react';
import img1 from './Images/2018/18IFR001.jpg'
import img2 from './Images/2018/18IFR002.jpg'


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
import CardActionArea from '@material-ui/core/CardActionArea';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary, 
  },
}));
  
function Dept() {
    const classes = useStyles();
    return (
        <div className={classes.root} justify="center">
        <Typography variant="h2" align="center" color="textPrimary" >
              IT students
        </Typography> <br/>
        <Grid container spacing={1}>
          <Grid container item xs={3} spacing={0}> 
                                        <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia>
                                            <img src={img1} alt/>
                                            </CardMedia>
                                            <CardContent>
                                            <h6>Name and Details</h6>
                                            {/*Firebase content*/}
                                            </CardContent>
                                        </CardActionArea>
                                        </Card>
          </Grid>
          <Grid container item xs={3} spacing={0}> 
                                        <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia>
                                            <img src={img2} alt/>
                                            </CardMedia>
                                            <CardContent>
                                            <h6>Name and Details</h6>
                                            {/*Firebase content*/}
                                            </CardContent>
                                        </CardActionArea>
                                        </Card>
          </Grid>
          </Grid>
      </div>
      );
    }
export default Dept