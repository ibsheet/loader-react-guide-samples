import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IBSheet8 from 'components/SheetCreate';
const Content = ({ options }) => {
  const useStyles = makeStyles((props) => ({
  }));

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" component="main">
        <IBSheet8 id="sheet" el="sheetDiv" width="100%" height="500px" options={ options } />
      </Container>
    </>
  )
}
export default Content;