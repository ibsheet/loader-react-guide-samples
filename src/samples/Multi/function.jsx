/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch } from 'react-redux';
import loader from '@ibsheet/loader';
import { setVisible } from '../../reducer';
import { StyledSampleWrapper, StyledSampleButton } from '../../components/View/Features/GlobalStyles'

const Function = () => {
  const dispatch = useDispatch();
  const IBSheet = loader.getIBSheetStatic();

  const btnObj = [
    {
      value: 'create',
      name: '시트 생성'
    },
    {
      value: 'remove',
      name: '시트 지우기'
    }
  ];

  const clickHandler = (e) => {
    const value = e.currentTarget.value;

    if (value === 'remove' || (IBSheet && IBSheet.length)) {
      dispatch(setVisible(false));
    }
    if (value === 'create') {
      dispatch(setVisible(true));
    }
  };

  return (
    <StyledSampleWrapper>
      {
        btnObj.map((obj, index) => (
          <StyledSampleButton value={ obj.value } variant='contained' onClick={ clickHandler } key={ index }>
            { obj.name }
          </StyledSampleButton>
        ))
      }
    </StyledSampleWrapper>
  );
};

export default Function;