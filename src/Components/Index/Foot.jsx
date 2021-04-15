import react from 'react';
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
import Link from '@material-ui/core/Link';
import { blueGrey } from '@material-ui/core/colors';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {' '}
        {'KEC'}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  
 }

        function Foot() {
            return (
                <div>
                    {/* Footer */}
            <footer>
            <Typography variant="h6" align="center" gutterBottom>
                ***END***
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Designed by Kavin_brti.b.e
            </Typography>
            <Copyright />
            </footer>
            {/* End footer */}
                </div>
            )
        }
export default Foot
