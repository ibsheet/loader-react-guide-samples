import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Content from 'components/Content';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ex from 'image/ex.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

// 여기에 Rounter 설정
const Main = () => {
  const title = 'IBSheet8';
  const subTitle = 
    'Loader를 사용하여 IBSheet8의 대용량 조회, 높은 자유도, 다양한 렌더링 방식 등 다양한 기능을 React 환경에서 제공합니다.';
  const func = [];
  const route = ['type', 'merge', 'tree', 'serverpaging', 'subsum', 'formula', 'form', 'multiple', 'dialog'];
  const f = ['기본기능', '기본기능', '기본기능', '기본기능', '고급기능', '고급기능', '실무예제', '실무예제', '실무예제'];
  const samples = ['컬럼 타입', '자동 머지', '트리 기능', '서버스크롤페이징', '소계 기능', '포뮬러 기능', 'Form 요소를 이용한 상세보기', '여러 개의 시트', '시트 + 다이얼로그'];
  const [mouseOver, setMouserOver] = useState(false);

  const useStyles = makeStyles((theme) => ({
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
      cursor: 'pointer',
      backgroundImage: `url(${ex})`,
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

  const toggleOver = () => setMouserOver((prev) => !prev);

  return (
    <>
    <Content title={ title } subTitle={ subTitle } func={ func }/>
    <Container className={ classes.cardGrid } maxWidth='md'>
        {/* 샘플 리스트 영역 */}
        <Grid container spacing={4}>
          {samples.map((card, index) => (
            <Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>
              <Card className={ classes.card }>
                <CardContent className={ classes.cardContent }>
                  <Link underline='none' to={'/' + route[index]}>
                    <div className={ classes.imgs } 
                      onMouseEnter={ toggleOver }
                      onMouseLeave={ toggleOver }
                    >
                      {mouseOver ? <div className={ classes.cardHover } ></div> : <></>}
                    </div>
                  </Link>
                  <div>
                    <Typography gutterBottom variant='body1' component='span' className={ returnStyleName(f[index]) }>
                      { f[index] }
                    </Typography>
                    <Typography gutterBottom variant='body2' component='span' className={ classes.bodyspan }>
                      { samples[index] }
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
