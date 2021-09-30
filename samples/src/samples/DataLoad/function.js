import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import setData from './data';

const Function = () => {
  const sheet = useSelector(state => state.sheet);
  const [count, setCount] = useState(100000);

  const changeHandler = (e) => {
    setCount(e.target.value);
  }

  const clickHandler = (e) => {
    sheet[0].loadSearchData(setData(count));
  }

  const useStyles = makeStyles((props) => ({
    selectStyle: {
      paddingLeft: '15px'
    },
    btnStyle: {
      height: '30px',
      background: '#4c4c57',
      color: '#fff',
      marginLeft: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      조회 건 수:
      <Select
        className={ classes.selectStyle }
        labelId='data-load'
        id='data-load'
        name='dataload'
        value={ count }
        onChange={ changeHandler }
      >
        <MenuItem value={ 100000 }>100,000 건</MenuItem>
        <MenuItem value={ 200000 }>200,000 건</MenuItem>
        <MenuItem value={ 300000 }>300,000 건</MenuItem>
      </Select>
      <Button className={ classes.btnStyle } variant='contained' onClick={ clickHandler }>
        조회
      </Button>
    </div>
  );
};

export default Function;