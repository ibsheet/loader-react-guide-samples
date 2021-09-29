import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import createStr from 'data/createStr';

const ClipboardCopy = () => {
  const textElem = useRef();
  const btnElem = useRef();
  const [copyStr, setCopyStr] = useState('COPY');
  const useStyles = makeStyles((theme) => ({
    copyBtn: {
      width: '100%',
      backgroundColor: '#4c4c57',
      color: '#fff'
    },
    areaStyle: {
      width: '100%',
      height: '550px',
      border: 'none'
    }
  }));

  const doCopy = () => {
    textElem.current.select();
    document.execCommand('copy');
    btnElem.current.style.backgroundColor = '#00b400';
    setCopyStr('COPY Success!');
  };

  const classes = useStyles();

  return (
    <>
      <textarea ref={ textElem } readOnly className={ classes.areaStyle } value={ createStr }></textarea>
      <Button ref={ btnElem } variant='contained' className= { classes.copyBtn } onClick={ () => doCopy() }>
        { copyStr }
      </Button>
    </>
  );
}

export default ClipboardCopy;