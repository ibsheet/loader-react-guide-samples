import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Section = ({ title, subTitle, func}) => {
  const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: '38px',
      fontWeight: 'bold',
      color: 'textPrimary'
    },
    content: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    button: {
      marginTop: theme.spacing(4),
    },
  }));

  const classes = useStyles();
  
  return (
    <>
      <div className={classes.content}>
        <Container maxWidth="sm">
          <Typography variant="h2" align='center' gutterBottom className={ title }>
            { title }
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            { subTitle }
          </Typography>
        </Container>
        <div className={classes.button}>
          <Grid container spacing={2} justify="center">
            { func && 
              func.map((v, i) => 
                <Grid item>
                  <Button variant="contained" color="primary" onClick={v.func}>{v.text}</Button>
                </Grid>)
            }
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Section;
