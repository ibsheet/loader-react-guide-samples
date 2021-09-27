import React, { useRef, useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CgComponents } from 'react-icons/cg';

const ClipboardCopy = ({text}) => {
  const textElem = useRef();
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
    document.execCommand("copy");
    setCopyStr('COPY Success!')
  };

  const classes = useStyles();

  return (
    <>
      <textarea className={ classes.textStyle } ref={ textElem }></textarea>
      <Button variant='contained' className= { classes.copyBtn } onClick={ () => doCopy(text) }>
        { copyStr }
      </Button>
    </>
  );
}

export default ClipboardCopy;