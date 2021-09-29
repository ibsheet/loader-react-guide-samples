import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Function = () => {
  const ibsheet = useSelector(state => state.sheet);
  const sheet = ibsheet[0];
  const [level, setLevel] = useState(4);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      sheet.showTreeLevel(level);
    }
  }, [level, sheet]);

  const changeHandler = (e) => {
    setLevel(e.target.value);
  };

  const useStyles = makeStyles((props) => ({
    divStyle: {
      paddingBottom: '10px'
    },
    spanStyle: {
      color: '#4c4c57',
      fontSize: '1rem',
      marginRight: '14px'
    },
    btnStyle: {
      height: '30px',
      background: '#4c4c57',
      color: '#fff',
      marginRight: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divStyle }>
      <span className={ classes.spanStyle }>지정한 레벨만큼 트리를 접거나 펼칠 수 있습니다.</span>
      <Select
        labelId='show-tree-level-label'
        id='show-tree-level'
        name='showTreeLevel'
        value={ level }
        onChange={ changeHandler }
      >
        <MenuItem value={ 1 }>showTreeLevel: 1</MenuItem>
        <MenuItem value={ 2 }>showTreeLevel: 2</MenuItem>
        <MenuItem value={ 3 }>showTreeLevel: 3</MenuItem>
        <MenuItem value={ 4 }>showTreeLevel: 4</MenuItem>
      </Select>
    </div>
  );
};

export default Function;