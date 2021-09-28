import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createFormState } from 'modules';

const FormDiv = () => {
  const dispatch = useDispatch();
  const fname = useRef();
  const fage = useRef();
  const fposition = useRef();
  const fsalary = useRef();
  const fdepartment = useRef();

  dispatch(createFormState(fname, fage, fposition, fsalary, fdepartment));

  const useStyles = makeStyles((theme) => ({
    divCol: {
      display: 'flex',
      justifyContent: 'center',
      width: '30%',
      border: '1px solid #cfd1d6'
    },
    divInner: {
      width: '100%'
    },
    divTitle: {
      height: '15%',
      justifyContent: 'center',
      display: 'flex',
      textAlign: 'center',
    },
    labelTitle: {
      color: '#000',
      fontSize: '2.0rem',
      fontWeight: 'bold',
      margin: 'auto'
    },
    divContent: {
      textAlign: 'center',
    },
    divComp: {
      width: '100%',
      paddingBottom: '55px'
    },
    textfield: {
      width: '70%'
    }
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divCol }>
      <div className={ classes.divInner }>
        <div className={ classes.divTitle }>
          <label className={ classes.labelTitle }>상세보기</label>
        </div>
        <div className={ classes.divContent }>
          <div className={ classes.divComp }>
            <TextField ref={ fname } InputProps={{ readOnly: true }} id='name' label='이름' variant='standard' className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField ref={ fage } InputProps={{ readOnly: true }} id='age' label='나이' variant='standard' className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField ref={ fposition } InputProps={{ readOnly: true }} id='position' label='직책' variant='standard' className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField ref={ fsalary } InputProps={{ readOnly: true }} id='salary' label='월급' variant='standard' className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField ref={ fdepartment } InputProps={{ readOnly: true }} id='department' label='부서' variant='standard' className={ classes.textfield } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDiv;
