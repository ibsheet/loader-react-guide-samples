import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import styles from 'assets/styles/samples/merge.module.css';

const Function = () => {
  const sheet = useSelector(state => state.sheet);

  const [headerMerge, setHeaderMerge] = useState(0);
  const [dataMerge, setDataMerge] = useState(0);
  const [prevColumnMerge, setPrevColumnMerge] = useState(0);
  const mounted = useRef(false);
  const mObj = ['0', '1', '2', '3', '4', '5', '6'];

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      sheet[0].setAutoMerge({headerMerge: headerMerge, dataMerge: dataMerge, prevColumnMerge: prevColumnMerge});
    }
    return () => {
    };
  }, [headerMerge, dataMerge, prevColumnMerge, sheet]);

  const changeHandler = (e) => {
    switch(e.target.name) {
      case 'headerMerge':
        setHeaderMerge(e.target.value - 0);
        break;
      case 'dataMerge':
        setDataMerge(e.target.value - 0);
        break;
      default:
        setPrevColumnMerge(e.target.value - 0);
    }
  }

  return (
    <div className={ styles.wrapper }>
      <Select
        className={ styles.selectStyle }
        labelId='header-merge-label'
        id='header-merge-label'
        name='headerMerge'
        value={ headerMerge }
        onChange={ changeHandler }
        size='small'
        variant='standard'
      >
        {
          mObj.map((val, index) => (
            <MenuItem value={ val } key={ index }>HeaderMerge: { val }</MenuItem>
          ))
        }
      </Select>
      <Select
        className={ styles.selectStyle }
        labelId='data-merge-label'
        id='data-merge-label'
        name='dataMerge'
        value={ dataMerge }
        onChange={ changeHandler }
        size='small'
        variant='standard'
      >
        {
          mObj.map((val, index) => (
            <MenuItem value={ val } key={ index }>DataMerge: { val }</MenuItem>
          ))
        }
      </Select>
      <Select
        className={ styles.selectStyle }
        labelId='prev-column-merge-label'
        id='prev-column-merge-select'
        name='prevColumnMerge'
        value={ prevColumnMerge }
        onChange={ changeHandler }
        size='small'
        variant='standard'
      >
        {
          mObj.slice(0, 4).map((val, index) => (
            <MenuItem value={ val } key={ index }>PrevColumnMerge: { val }</MenuItem>
          ))
        }
      </Select>
    </div>
  );
};

export default Function;