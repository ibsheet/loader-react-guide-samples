import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Content from 'components/Content';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import doge from 'image/doge.png';

// 여기에 Rounter 설정
const Main = () => {
  const title = 'IBSheet8';
  const subTitle = 'We provide an IBSheet8 sample with a loader in the React environment.';
  const func = [];
  const route = ['type', 'merge', 'subsum', 'tree', 'serverpaging', 'formula', 'form', 'multiple', 'dialog'];
  const f = '기능';
  const samples = ['타입', '자동 머지', '소계', '트리', '서버스크롤페이징', '포뮬러', 'Form 요소를 이용한 상세보기', '여러 개의 시트', '시트 + 다이얼로그'];
  const desc = [
    '여러가지 타입이 있는 기본 타입 샘플 입니다.',
    'setAutoMerge를 사용하여 자동머지를 할 수 있는 기능입니다.',
    '특정 컬럼을 기준으로, 소계 값을 보여주는 기능입니다.',
    '시트 내에 특정 컬럼을 트리를 만들 수 잇는 기능입니다.',
    '스크롤바를 최하단으로 내릴 때마다 데이터를 추가하는 방식입니다.',
    '속성에 대한 포뮬러 및 값의 대한 포뮬러 기능입니다.',
    '폼 형태와 시트를 사용하는 기능입니다.',
    '여러 개의 시트를 한 번에 로드해서 사용하는 방식입니다.',
    '시트와 다른 다이얼로그를 사용하는 방식입니다.'
  ];

  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardHover: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#000'
    },
    cardContent: {
      flexGrow: 1,
    },
    imgs: {
      width: '100%',
      hegiht: '100%'
    },
    body1span: {
      fontSize: '1.8rem',
      marginRight: '0.25rem',
      background: 'skyblue'
    },
    body2span: {

    }
  }));
  const classes = useStyles();

  return (
    <>
    <Content title={ title } subTitle={ subTitle } func={ func }/>
    <Container className={ classes.cardGrid } maxWidth="md">
        {/* 샘플 리스트 영역 */}
        <Grid container spacing={4}>
          {samples.map((card, index) => (
            <Grid item key={ card } xs={ 12 } sm={ 6 } md={ 4 }>

              <Card className={ classes.card }>
                <Link to={"/" + route[index]}>
                  <img src={ doge } alt="doge" className={ classes.imgs } />
                    <CardContent className={ classes.cardContent }>
                      <Typography gutterBottom variant="body1" component="span" className={ classes.body1span }>
                        { f }
                      </Typography>
                      <Typography gutterBottom variant="body2" component="span" className={ classes.body2span }>
                        { samples[index] }
                      </Typography>
                    </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
