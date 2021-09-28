import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ClipboardCopy = ({text}) => {
  const textElem = useRef();
  const btnElem = useRef();
  const [copyStr, setCopyStr] = useState('COPY');
  const useStyles = makeStyles((theme) => ({
    copyBtn: {
      width: '100%',
      backgroundColor: '#4c4c57',
      color: '#fff'
    },
    textStyle: {
      top: '0',
      left: '0',
      position: 'fixed',
      zIndex: '-1',
      width: '0px',
      height: '0px',
      border: 'none'
    }
  }));

  const doCopy = text => {
    textElem.current.value = text;
    textElem.current.select();
    document.execCommand('copy');
    btnElem.current.style.backgroundColor = '#00b400';
    setCopyStr('COPY Success!');
  };

  const classes = useStyles();

  return (
    <>
      <textarea className={ classes.textStyle } ref={ textElem }></textarea>
      <Button ref={ btnElem } variant='contained' className= { classes.copyBtn } onClick={ () => doCopy(text) }>
        { copyStr }
      </Button>
    </>
  );
}

export default ClipboardCopy;