import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const TabCopy = () => {
  const textElem = useRef();
  const btnElem = useRef();
  const [copyStr, setCopyStr] = useState('COPY');
  const options = useSelector((state) => state.options);

  const listItems = options && options.length > 0 && options.map((option) => {
    return option.id + '= ' + JSON.stringify(option.options, null, '\t')
  });

  const copyHandler = () => {
    textElem.current.select();
    document.execCommand('copy');
    btnElem.current.style.backgroundColor = '#00b400';
    setCopyStr('COPY Success!');
  };

  const useStyles = makeStyles((theme) => ({
    copyBtn: {
      width: '100%',
      backgroundColor: '#4c4c57',
      color: '#fff'
    },
    btnDivParent: {
      width: '100%',
      height: '40px',
      marginBottom: '7px',
    },
    btnDivChild: {
      width: '160px',
      height: '30px',
      backgroundColor: '#4c4c57',
      float: 'right',
      color: '#fff'
    },
    areaStyle: {
      width: '100%',
      height: '550px',
      border: 'none',
      backgroundColor: '#eee'
    },
    spanStyle: {
      color: '#4c4c57',
      fontSize: '1rem',
      marginTop: '14px',
      lineHeight: '30px'
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
    <div>
      <div className={ classes.btnDivParent }>
        <span className={ classes.spanStyle }>버튼을 눌러 현재 시트의 옵션을 복사 할 수 있습니다. samples/폴더 에 각 샘플의 옵션이 담겨져 있습니다.</span>
        <Button ref={ btnElem } variant='contained' className={ classes.btnDivChild } onClick={ copyHandler }>
          { copyStr }
        </Button>
      </div>
      <textarea ref={ textElem } readOnly className={ classes.areaStyle } value={ listItems } />
    </div>
  );
}

export default TabCopy;