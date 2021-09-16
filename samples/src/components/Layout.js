import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Navigation  from './Navigation';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StyleLink from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <StyleLink color="inherit" href="https://www.ibsheet.com/">
        IBSheet8
      </StyleLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
              <Typography variant="h6" color="inherit" noWrap>
                IBSheet8
              </Typography>
          </Toolbar>
        </AppBar>
        <main>
        <Switch>
          <Route exact path='/:name' render={(props) => <Navigation {...props}/>}></Route>
          <Route exact path='/' render={(props) => <Navigation {...props}/>}></Route>
        </Switch>
        </main>
        <footer className={classes.footer}>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            &copy; {new Date().getFullYear()} IBSheet8 React Guide Sample
          </Typography>
          <Copyright />
        </footer>
      </BrowserRouter>
    </>
  );
};

export default Layout;