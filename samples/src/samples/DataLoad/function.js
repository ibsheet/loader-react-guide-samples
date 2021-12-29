import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './style';
import setData from './data';

const Function = () => {
  const sheet = useSelector(state => state.sheet);
  const [count, setCount] = useState(100000);
  const item = [
    {
      value: 100000,
      name: '100,000'
    },
    {
      value: 200000,
      name: '200,000'
    },
    {
      value: 300000,
      name: '300,000'
    }
  ];

  const changeHandler = e => {
    setCount(e.target.value);
  }

  const clickHandler = e => {
    sheet[0].loadSearchData(setData(count));
  }

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
        {
          item.map((obj, index) => (
            <MenuItem value={ obj.value } key={ index }> { obj.name } 건</MenuItem>
          ))
        }
      </Select>
      <Button className={ classes.btnStyle } variant='contained' onClick={ clickHandler }>
        조회
      </Button>
    </div>
  );
};

export default Function;