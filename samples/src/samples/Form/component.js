import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormDiv = () => {
  const ibsheet = useSelector(state => state.sheet);
  const sheet = ibsheet[0];
  const mounted = useRef(false);
  const fname = useRef();
  const fage = useRef();
  const fposition = useRef();
  const fsalary = useRef();
  const fdepartment = useRef();
  const refData = [fname, fage, fposition, fsalary, fdepartment];
  const formId = [
    {
      id: 'formName',
      name: 'sName'
    },
    {
      id: 'formAge',
      name: 'sAge'
    },
    {
      id: 'formPosi',
      name: 'sPosi'
    },
    {
      id: 'formSal',
      name: 'sPrice'
    },
    {
      id: 'formDepart',
      name: 'sDepart'
    },
  ];

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      eventBind(sheet);
    }
  }, [sheet]);

  const onblurhandler = (e) => {
    if (sheet) {
      const frow = sheet.getFocusedRow();
      const cellVal = sheet.getValue(frow, e.target.id);
      if (cellVal !== e.target.value) {
        sheet.setValue(frow, e.target.id, e.target.value);
      }
    }
  };

  const eventBind = (sheet) => {
    sheet.bind('onFocus', evt => {
      fname.current.lastChild.firstChild.value = evt.row['sName'];
      fage.current.lastChild.firstChild.value = evt.row['sAge'];
      fposition.current.lastChild.firstChild.value = evt.row['sPosi'];
      fsalary.current.lastChild.firstChild.value = evt.row['sPrice'];
      fdepartment.current.lastChild.firstChild.value = evt.row['sDepart'];
    });
    sheet.bind('onBlur', evt => {
      fname.current.lastChild.firstChild.value = '';
      fage.current.lastChild.firstChild.value = '';
      fposition.current.lastChild.firstChild.value = '';
      fsalary.current.lastChild.firstChild.value = '';
      fdepartment.current.lastChild.firstChild.value = '';
    });
  };

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
      paddingTop: '25px',
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
          {
            formId.map((obj, index) => {
              return (
                <div key={ obj.id } className={ classes.divComp }>
                  <TextField key={ index.toString() } ref={ refData[index] } id={ obj.name } variant='standard' className={ classes.textfield } onBlur={ onblurhandler } />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default FormDiv;
