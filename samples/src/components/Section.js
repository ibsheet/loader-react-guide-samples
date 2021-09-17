import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Section = ({ title, subTitle, func }) => {
  const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      color: '#000'
    },
    subTitle: {
      fontSize: '18px'
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      fontFamily: 'Noto Sans CJK KR,sans-serif'
    },
    button: {
      marginTop: theme.spacing(4),
    },
    header: {
      maxWidth: '900px',
      margin: '0px auto'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.content}>
        <Container>
          <div className={ classes.header }>
            <span className={ classes.title }>
              { title }
            </span>
            <p className={ classes.subTitle }>
              { subTitle }
            </p>
          </div>
        </Container>
        <div className={classes.button}>
          <Grid container spacing={2} justify="center">
            {/* {
              func && func.map((v, i) =>
              <Grid item>
                <Button variant="contained" color="primary" onClick={v.func}>{v.text}</Button>
              </Grid>)
            } */}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Section;
