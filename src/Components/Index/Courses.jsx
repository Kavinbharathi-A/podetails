import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Dept from '../Department/Dept_be';
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


  

  
function Courses() {
    const classes = useStyles();
    return (
        <div className={classes.root} justify="center">
        <Typography variant="h2" align="center" color="textPrimary" >
              Courses
        </Typography> 
        <Grid container spacing={1}>
          <Grid container item xs={4} spacing={0}>
                                        <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt="CSE"
                                            height="200"
                                            image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                            
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                B.E
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link to="/Dept_be" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                            <Button renderAs="button" variant="contained" color="Primary">
                                            <span>Go</span>
                                            </Button>
                                            </Link>
                                        </CardActions>
                                        </Card>
          </Grid>
          <Grid container item xs={4} spacing={0}>
                                <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="CSE"
                                    height="200"
                                    image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                    
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" justify="left">
                                         M.E
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                        <Link to="/Dept_me" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button renderAs="button" variant="contained" color="Primary">
                                        <span>Go</span>
                                        </Button>
                                        </Link>
                                </CardActions>
                                </Card>
          </Grid>
          <Grid container item xs={4} spacing={0}>
                                    <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="CSE"
                                        height="200"
                                        image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                        
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            BSC
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                            <Link to="/Dept_bsc" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                            <Button renderAs="button" variant="contained" color="Primary">
                                            <span>Go</span>
                                            </Button>
                                            </Link>
                                    </CardActions>
                                    </Card>
          </Grid>
       
        <Grid container item xs={4} spacing={0}>
                                  <Card className={classes.root}>
                                  <CardActionArea>
                                      <CardMedia
                                      component="img"
                                      alt="CSE"
                                      height="200"
                                      image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                      
                                      />
                                      <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                          MSC
                                      </Typography>
                                      </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                        <Link to="/Dept_msc" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                        <Button renderAs="button" variant="contained" color="Primary">
                                        <span>Go</span>
                                        </Button>
                                        </Link>
                                  </CardActions>
                                  </Card>
          </Grid>
          <Grid container item xs={4} spacing={0}>
                                    <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="CSE"
                                        height="200"
                                        image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                        
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            MCA
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                            <Link to="/Dept_mca" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                            <Button renderAs="button" variant="contained" color="Primary">
                                            <span>Go</span>
                                            </Button>
                                            </Link>
                                    </CardActions>
                                    </Card>
          </Grid>
          <Grid container item xs={4} spacing={0}>
                                    <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="CSE"
                                        height="200"
                                        image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                           MBA
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                            <Link to="/Dept_mba" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                            <Button renderAs="button" variant="contained" color="Primary">
                                            <span>Go</span>
                                            </Button>
                                            </Link>
                                    </CardActions>
                                    </Card>
          </Grid>
          <Grid container item xs={4} spacing={0}>
                            <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="CSE"
                                height="200"
                                image="https://th.bing.com/th/id/OIP.Zzd2JF6iCxrZGscJC00PIwHaEX?w=322&h=189&c=7&o=5&dpr=1.25&pid=1.7"
                                title="CSE"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    MTech
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                    <Link to="/Dept_mtech" style={{paddingLeft: 13, textDecoration: 'none'}}>
                                    <Button renderAs="button" variant="contained" color="Primary">
                                    <span>Go</span>
                                    </Button>
                                    </Link>
                            </CardActions>
                            </Card>
                    </Grid>
          </Grid>
      </div>
      );
    }
export default Courses