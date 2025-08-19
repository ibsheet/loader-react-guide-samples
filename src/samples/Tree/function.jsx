import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import styles from '../../assets/styles/samples/tree.module.css';
import loader from '@ibsheet/loader';

const Function = () => {
  const sheetIds = useSelector(state => state.sheetIds);
  const IBSheet = loader.getIBSheetStatic();
  let sheet = sheetIds.length > 0 && IBSheet[sheetIds[sheetIds.length -1]];
  
  const [level, setLevel] = useState(4);
  const mounted = useRef(false);
  const loop = ['1', '2', '3', '4'];

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      sheet.showTreeLevel(level);
    }
  }, [level, sheet]);

  const changeHandler = (e) => {
    let val = e.target.value;
    if (typeof val === 'string') val -= 0;
    setLevel(val);
  };

  return (
    <div className={ styles.wrapper }>
      <span className={ styles.span }>지정한 레벨만큼 트리를 접거나 펼칠 수 있습니다.</span>
      <Select
        labelId='show-tree-level-label'
        id='show-tree-level'
        name='showTreeLevel'
        value={ level }
        onChange={ changeHandler }
        size='small'
        variant='standard'
      >
        {
          loop.map((val, index) => (
            <MenuItem value={ val } key={ index }>showTreeLevel: { val }</MenuItem>
          ))
        }
      </Select>
    </div>
  );
};

export default Function;