/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loader from '@ibsheet/loader';
import { createSheet } from '../../reducer';
import { StyledSampleWrapper, StyledSampleButton } from '../../components/View/Features/GlobalStyles.js';

const Function = () => {
  const dispatch = useDispatch();
  const options = useSelector(state => state.options);
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
    const IBSheet = loader.getIBSheetStatic();
    const value = e.currentTarget.value;

    if (value === 'remove' || (IBSheet && IBSheet.length)) {
      IBSheet.disposeAll();
    }
    if (value === 'create') {
      options.map(sheet => {
        loader.createSheet({
          id: sheet.id,
          el: sheet.el,
          options: sheet.options
        })
        .then(sheet => {
          dispatch(createSheet(sheet));
        });
      });
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