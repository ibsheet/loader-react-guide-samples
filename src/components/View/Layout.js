import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navigation  from '../Navigation/Navigation';
import Section from '../View/Section';
import Copyright from '../View/Features/CopyRight';
import Menu from '../View/Menu';
import PageNavigation from '../View/PageNavigation';
import { StyledDivider } from '../View/Features/GlobalStyles';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StyleLink from '@mui/material/Link';
import { FaTable } from 'react-icons/fa';
import { RiBook3Fill } from 'react-icons/ri';
import styles from '../../assets/styles/components/View/layout.module.css';

const Layout = () => {

  return (
    <>
      <BrowserRouter basename='/v8/demo/react'>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar className={ styles.bar }>
            <Link className={ styles.homeLink } to='/'>
              <FaTable size='25' className={ styles.icon } />
              <Typography variant='h6' color='inherit' noWrap>
                IBSheet8
              </Typography>
            </Link>
            <Menu />
          </Toolbar>
        </AppBar>
        <main className={ styles.main }>
          <Section />
          <Switch>
            <Route exact path='/:name' render={(props) => <Navigation {...props}/>}></Route>
            <Route exact path='/' render={(props) => <Navigation {...props}/>}></Route>
          </Switch>
        </main>
        <footer className={ styles.footer }>
          <div className={ styles.infooter }>
            <PageNavigation />
            <div className={ styles.provide }>
              <RiBook3Fill className={ styles.footIcon } size='50' />
              <span className={ styles.footTitle }>
                { 'Provide' }
              </span>
              <ul>
                <li>
                  <span className={ styles.spContent1 }>
                    <StyleLink underline='none' color='inherit' href='https://www.ibsheet.com/'>
                      Package
                    </StyleLink>
                  </span>
                  <span className={ styles.spContent2 }>
                    { ': ?????? ??????????????? ??????????????? ibsheet ?????????????????? ????????? ???????????? ???????????????.' }
                  </span>
                </li>
                <li>
                  <span className={ styles.spContent1 }>
                    <StyleLink underline='none' color='inherit' href='https://github.com/ibsheet/loader'>
                      Loader
                    </StyleLink>
                  </span>
                  <span className={ styles.spContent2 }>
                    { ': SPA ???????????? IBSheet8??? ???????????? ?????? ????????????????????????.' }
                  </span>
                </li>
                <li>
                  <span className={ styles.spContent1 }>
                    <StyleLink underline='none' color='inherit' href='https://ibsheet.github.io/loader-manual/'>
                      IBSheet Loader Manual
                    </StyleLink>
                  </span>
                  <span className={ styles.spContent2 }>
                    { ': IBSheet-Loader??? ???????????? ?????? ????????? ???????????????.' }
                  </span>
                </li>
                <li>
                  <span className={ styles.spContent1 }>
                    <StyleLink underline='none' color='inherit' href='https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/feature'>
                      IBSheet8 Manual
                    </StyleLink>
                  </span>
                  <span className={ styles.spContent2 }>
                    { ': IBSheet8 ??? ????????? ????????? ?????? ????????? ??? ????????? ???????????? ???????????????.' }
                  </span>
                </li>
                <li>
                  <span className={ styles.spContent1 }>
                    <StyleLink underline='none' color='inherit' href='https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/html/main.html'>
                      IBSheet8 Sample
                    </StyleLink>
                  </span>
                  <span className={ styles.spContent2 }>
                    { ': ??? ????????? ????????? ???????????? IBSheet8 Demo Sample ??? ????????????.' }
                  </span>
                </li>
              </ul>
            </div>
            <StyledDivider />
            <div className={ styles.footfloor }>
              <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                &copy; {new Date().getFullYear()} IBSheet8 React Guide Sample
              </Typography>
              <Copyright />
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
};

export default Layout;