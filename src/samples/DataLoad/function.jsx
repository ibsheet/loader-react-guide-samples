import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@mui/material';
import styles from '../../assets/styles/samples/dataLoad.module.css';
import { StyledSampleButton } from '../../components/View/Features/GlobalStyles'
import setData from './data.jsx';
import loader from '@ibsheet/loader';

const Function = () => {
  const sheetIds = useSelector(state => state.sheetIds);
  const IBSheet = loader.getIBSheetStatic();
  let sheet = sheetIds.length > 0 && IBSheet[sheetIds[sheetIds.length -1]];
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

  const clickHandler = () => {
    sheet.loadSearchData(setData(count));
  }

  return (
    <div>
      조회 건 수:
      <Select
        labelId='data-load'
        id='data-load'
        className={ styles.select }
        name='dataload'
        value={ count }
        onChange={ changeHandler }
        size='small'
        variant='standard'
      >
        {
          item.map((obj, index) => (
            <MenuItem value={ obj.value } key={ index }> { obj.name } 건</MenuItem>
          ))
        }
      </Select>
      <StyledSampleButton className={ styles.button } variant='contained' onClick={ clickHandler }>
        조회
      </StyledSampleButton>
    </div>
  );
};

export default Function;