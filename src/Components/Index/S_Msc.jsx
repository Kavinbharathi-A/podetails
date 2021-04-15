import React from 'react';
import img1 from './Images/2015/15ISR001.jpg'
import img2 from './Images/2015/15ISR002.jpg'
import img3 from './Images/2015/15ISR003.jpg'
import img4 from './Images/2015/15ISR004.jpg'
import img5 from './Images/2015/15ISR005.jpg'
import img6 from './Images/2015/15ISR006.jpg'
import img7 from './Images/2015/15ISR007.jpg'
import img8 from './Images/2015/15ISR008.jpg'
import img9 from './Images/2015/15ISR009.jpg'
import img10 from './Images/2015/15ISR010.jpg'
import img11 from './Images/2015/15ISR011.jpg'
import img12 from './Images/2015/15ISR012.jpg'
import img13 from './Images/2015/15ISR013.jpg'
import img14 from './Images/2015/15ISR014.jpg'
import img16 from './Images/2015/15ISR016.jpg'
import img17 from './Images/2015/15ISR017.jpg'
import img18 from './Images/2015/15ISR018.jpg'
import img19 from './Images/2015/15ISR019.jpg'
import img22 from './Images/2015/15ISR022.jpg'
import img23 from './Images/2015/15ISR023.jpg'
import img24 from './Images/2015/15ISR024.jpg'
import img25 from './Images/2015/15ISR025.jpg'
import img26 from './Images/2015/15ISR026.jpg'
import img28 from './Images/2015/15ISR028.jpg'
import img29 from './Images/2015/15ISR029.jpg'
import img30 from './Images/2015/15ISR030.jpg'
import img31 from './Images/2015/15ISR031.jpg'
import img32 from './Images/2015/15ISR032.jpg'
import img33 from './Images/2015/15ISR033.jpg'
import img34 from './Images/2015/15ISR034.jpg'
import img35 from './Images/2015/15ISR035.jpg'
import img36 from './Images/2015/15ISR036.jpg'
import img37 from './Images/2015/15ISR037.jpg'
import img38 from './Images/2015/15ISR038.jpg'
import img40 from './Images/2015/15ISR040.jpg'
import img41 from './Images/2015/15ISR041.jpg'
import img42 from './Images/2015/15ISR042.jpg'
import img43 from './Images/2015/15ISR043.jpg'
import img44 from './Images/2015/15ISR044.jpg'
import img46 from './Images/2015/15ISR046.jpg'
import img47 from './Images/2015/15ISR047.jpg'
import img48 from './Images/2015/15ISR048.jpg'
import img49 from './Images/2015/15ISR049.jpg'
import img50 from './Images/2015/15ISR050.jpg'
import img51 from './Images/2015/15ISR051.jpg'
import img52 from './Images/2015/15ISR052.jpg'
import img53 from './Images/2015/15ISR053.jpg'

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
              MSC students
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
          <Grid container item xs={3} spacing={0}> 
                                        <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia>
                                            <img src={img3} alt/>
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
                                            <img src={img4} alt/>
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
                                            <img src={img5} alt/>
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
                                            <img src={img6}/>
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
                                            <img src={img7} alt/>
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
                                            <img src={img8} alt/>
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
                                            <img src={img9} alt/>
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
                                            <img src={img10} alt/>
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
                                            <img src={img11} alt/>
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
                                            <img src={img12} alt/>
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
                                            <img src={img13} alt/>
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
                                            <img src={img14} alt/>
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
                                            <img src={img16} alt/>
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
                                            <img src={img17} alt/>
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
                                            <img src={img18} alt/>
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
                                            <img src={img19} alt/>
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
                                            <img src={img22} alt/>
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
                                            <img src={img23} alt/>
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
                                            <img src={img24} alt/>
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
                                            <img src={img25} alt/>
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
                                            <img src={img26} alt/>
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
                                            <img src={img28} alt/>
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
                                            <img src={img29} alt/>
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
                                            <img src={img30} alt/>
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
                                            <img src={img31} alt/>
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
                                            <img src={img32} alt/>
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
                                            <img src={img33} alt/>
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
                                            <img src={img34} alt/>
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
                                            <img src={img35} alt/>
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
                                            <img src={img36} alt/>
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
                                            <img src={img37} alt/>
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
                                            <img src={img38} alt/>
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
                                            <img src={img40} alt/>
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
                                            <img src={img41} alt/>
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
                                            <img src={img42} alt/>
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
                                            <img src={img43} alt/>
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
                                            <img src={img44} alt/>
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
                                            <img src={img46} alt/>
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
                                            <img src={img47} alt/>
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
                                            <img src={img48} alt/>
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
                                            <img src={img49} alt/>
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
                                            <img src={img50} alt/>
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
                                            <img src={img51} alt/>
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
                                            <img src={img52} alt/>
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
                                            <img src={img53} alt/>
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