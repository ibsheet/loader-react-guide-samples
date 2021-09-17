import React from 'react';
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

// 여기에 Rounter 설정 
const Main = () => {
  const title = 'IBSheet8';
  const subTitle =  '설명';
  const func = [];

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
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  }));
  const classes = useStyles();

  const samples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <>
    <Content title={ title } subTitle={ subTitle } func={ func }/>
    <Container className={classes.cardGrid} maxWidth="md">
        {/* 샘플 리스트 영역 */}
        <Grid container spacing={4}>
          {samples.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              
              <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                <Link to="/merge">
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Link>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
