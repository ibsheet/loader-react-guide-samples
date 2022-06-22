import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { route } from 'components/Navigation/Navigation'

// 여기에 Rounter 설정
const Main = () => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#FFFFFF',
      opacity: 0.8
    },
    iconWrap: {
      display: 'flex',
      justifyContent: 'center'
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      maxWidth: '1200px'
    },
    card: {
      height: '100%',
    },
    cardHover: {
      height: '100%',
      left: '0',
      position: 'absolute',
      top: '0',
      width: '100%',
      zIndex: 2,
      opacity: 0,
      backgroundColor: 'rgba(0,0,0,.5)',
      padding: '20px 20px 0 20px',
      boxSizing: 'border-box',
      '&:hover': {
        opacity: 1,
        transition: 'opacity 350ms ease',
        transform: 'translate3d(0,0,0)',
      }
    },
    cardContent: {
      padding: '10px',
      paddingBottom: '13px !important'
    },
    imgs: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      color: '#FFF',
      position: 'relative',
      width: '100%',
      height: '200px',
      marginBottom: '10px'
    },
    basicfunc: {
      fontSize: '1.0rem',
      marginRight: '0.25rem',
      padding: '5px 8px',
      background: '#d04630',
      color: '#fff',
      borderRadius: '.25rem',
      fontWeight: 'bold'
    },
    advancedfunc: {
      fontSize: '1.0rem',
      marginRight: '0.25rem',
      padding: '5px 8px',
      background: '#009ecc',
      color: '#fff',
      borderRadius: '.25rem',
      fontWeight: 'bold'
    },
    workingfunc: {
      fontSize: '1.0rem',
      marginRight: '0.25rem',
      padding: '5px 8px',
      background: '#4caf50',
      color: '#fff',
      borderRadius: '.25rem',
      fontWeight: 'bold'
    },
    bodyspan: {
      fontSize: '1.0rem',
      padding: '0px 5px',
      color: '#000',
      fontWeight: 'bold'
    }
  }));
  const classes = useStyles();

  const returnStyleName = value => {
    switch (value) {
      case '고급기능':
        return classes.advancedfunc;
      case '실무예제':
        return classes.workingfunc;
      default:
        return classes.basicfunc;
    }
  }

  return (
    <>
      <Container className={ classes.cardGrid } maxWidth='md'>
        {/* 샘플 리스트 영역 */}
        <Grid container spacing={4}>
          {route && route.map((card, index) => (
            <Grid item key={ index } xs={ 12 } sm={ 6 } md={ 4 }>
              <Card className={ classes.card }>
                <CardContent className={ classes.cardContent }>
                  <div className={ classes.imgs } style={ { backgroundImage: `url(${require('image/' + card.name + '.png').default})` } } >
                    <div className={ classes.cardHover } >
                      <Link underline='none' to={'/' + card.name}>
                        <div className={ classes.iconWrap }>
                          <FontAwesomeIcon icon={ faSearch } className={ classes.icon }  size={ '4x' } />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Typography gutterBottom variant='body1' component='span' className={ returnStyleName(card.category) }>
                      { card.category }
                    </Typography>
                    <Typography gutterBottom variant='body2' component='span' className={ classes.bodyspan }>
                      { card.title }
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
