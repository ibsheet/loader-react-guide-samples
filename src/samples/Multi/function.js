/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import loader from '@ibsheet/loader';
import { createSheet } from 'reducer';
import useStyles from './style';

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
  const classes = useStyles();

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
    <div className={ classes.divStyle }>
      {
        btnObj.map((obj, index) => (
          <Button value={ obj.value } className={ classes.btnStyle } variant='contained' onClick={ clickHandler } key={ index }>
            { obj.name }
          </Button>
        ))
      }
    </div>
  );
};

export default Function;