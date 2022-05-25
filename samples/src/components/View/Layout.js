import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Navigation  from 'components/Navigation/Navigation';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StyleLink from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable, faBook } from '@fortawesome/free-solid-svg-icons';
import Section from 'components/View/Section';
import Copyright from 'components/View/Features/CopyRight';
import { layoutClasses } from './Features/ViewStyle';

const Layout = () => {
  const classes = layoutClasses();

  return (
    <>
      <BrowserRouter basename='/v8/demo/react'>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar className={ classes.bar }>
            <FontAwesomeIcon icon={ faTable } className={ classes.icon } />
            <Link className={ classes.homeLink } to='/'>
              <Typography variant='h6' color='inherit' noWrap>
                IBSheet8
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <main>
          <Section />
          <Switch>
            <Route exact path='/:name' render={(props) => <Navigation {...props}/>}></Route>
            <Route exact path='/' render={(props) => <Navigation {...props}/>}></Route>
          </Switch>
        </main>
        <footer className={ classes.footer }>
          <div className={ classes.infooter }>
            <FontAwesomeIcon icon={ faBook } className={ classes.footIcon } size={ '3x' } />
            <span className={ classes.footTitle }>
              { 'Provide' }
            </span>
            <ul>
              <li>
                <span className={ classes.spContent1 }>
                  <StyleLink color='inherit' href='https://www.ibsheet.com/'>
                    Package
                  </StyleLink>
                </span>
                <span className={ classes.spContent2 }>
                  { ': 해당 프로젝트를 실행하려면 ibsheet 라이브러리가 포함된 패키지가 필요합니다.' }
                </span>
              </li>
              <li>
                <span className={ classes.spContent1 }>
                  <StyleLink color='inherit' href='https://github.com/ibsheet/loader'>
                    Loader
                  </StyleLink>
                </span>
                <span className={ classes.spContent2 }>
                  { ': SPA 환경에서 IBSheet8을 사용하기 위한 라이브러리입니다.' }
                </span>
              </li>
              <li>
                <span className={ classes.spContent1 }>
                  <StyleLink color='inherit' href='https://ibsheet.github.io/loader-manual/'>
                    IBSheet Loader Manual
                  </StyleLink>
                </span>
                <span className={ classes.spContent2 }>
                  { ': IBSheet-Loader를 사용하기 위한 매뉴얼 안내입니다.' }
                </span>
              </li>
              <li>
                <span className={ classes.spContent1 }>
                  <StyleLink color='inherit' href='https://docs.ibleaders.com/ibsheet/v8/manual/#docs/intro/feature'>
                    IBSheet8 Manual
                  </StyleLink>
                </span>
                <span className={ classes.spContent2 }>
                  { ': IBSheet8 의 다양한 기능을 쉽게 사용할 수 있도록 매뉴얼을 제공합니다.' }
                </span>
              </li>
              <li>
                <span className={ classes.spContent1 }>
                  <StyleLink color='inherit' href='https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/html/main.html'>
                    IBSheet8 Sample
                  </StyleLink>
                </span>
                <span className={ classes.spContent2 }>
                  { ': 더 다양한 샘플이 모여있는 IBSheet8 Demo Sample 을 제공한다.' }
                </span>
              </li>
            </ul>
            <div className={ classes.footfloor }>
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