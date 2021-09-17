import React from 'react';
import Container from '@material-ui/core/Container';
import Section from 'components/Section';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';

const Content = ({ title, subTitle, func, sheet }) => {
  const useStyles = makeStyles((props) => ({
    content: {
      fontFamily: 'Noto Sans CJK KR,sans-serif;',
      margin: '0px auto',
      maxWidth: '1200px',
      paddingLeft: '0px',
      paddingRight: '0px' 
    },
    title: {

    },
    subTitle: {
      color: '#4c4c57',
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Section title={ title } subTitle={ subTitle } func={ func }></Section>
      <Container maxWidth="lg" component="main" className={ classes.content }>
        { sheet && <IBSheet8 id= { sheet.id } el={ sheet.el } width={ sheet.width } height={ sheet.height } options={ sheet.options } />}
      </Container>
    </>
  )
}

export default Content;