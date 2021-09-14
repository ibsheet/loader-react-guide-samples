import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';

const Content = ({ title, subTitle, description, options }) => {
  const useStyles = makeStyles((props) => ({
    content: {
      fontFamily: 'Arial'
    },
    title: {
      
    },
    subTitle: {
      color: '#4c4c57'
    },
    descriptionBox: {
      width: '50%',
      color: '#4c4c57',
      padding: props.spacing(2),
      marginBottom: props.spacing(2),
      backgroundColor: 'rgb(250, 250, 250)',
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" component="main" className={ classes.content }>
        { title && <Typography component="h1" variant="h4" className={ classes.title } gutterBottom>{ title }</Typography> }
        { subTitle && <Typography className={ classes.subTitle } gutterBottom>{ subTitle }</Typography> }
        { description && <Paper className={classes.descriptionBox}>{ description }</Paper> }
        { options && <IBSheet8 id="sheet" el="sheetDiv" width="100%" height="100%" options={ options } />}
      </Container>
    </>
  )
}

export default Content;