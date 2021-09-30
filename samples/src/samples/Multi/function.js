/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import loader from '@ibsheet/loader';
import { createSheet } from 'reducer';

const Function = () => {
  const dispatch = useDispatch();
  const options = useSelector(state => state.options);

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

  const useStyles = makeStyles((props) => ({
    divStyle: {
      display: 'flex',
      paddingBottom: '10px'
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
      <Button value='create' className={ classes.btnStyle } variant='contained' onClick={ clickHandler }>
        시트 생성
      </Button>
      <Button value='remove' className={ classes.btnStyle } variant='contained' onClick={ clickHandler }>
        시트 지우기
      </Button>
    </div>
  );
};

export default Function;