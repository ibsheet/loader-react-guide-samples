import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styles from 'assets/styles/samples/form.module.css';

const FormDiv = () => {
  const ibsheet = useSelector(state => state.sheet);
  const sheet = ibsheet[ibsheet.length - 1];
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
    sheet.bind('onBeforeFocus', evt => {
      switch (document.activeElement) {
        case fname.current.lastChild.firstChild:
        case fage.current.lastChild.firstChild:
        case fposition.current.lastChild.firstChild:
        case fsalary.current.lastChild.firstChild:
        case fdepartment.current.lastChild.firstChild:
          return document.activeElement.blur();
        default:
          // console.log('onBeforeFocus No blur');
      }
    });
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

  return (
    <div className={ styles.col }>
      <div className={ styles.inner }>
        <Typography variant='h4' className={ styles.title }>상세보기</Typography>
        <div className={ styles.content }>
          {
            formId.map((obj, index) => {
              return (
                <div key={ obj.id } className={ styles.comp }>
                  <TextField key={ index.toString() } ref={ refData[index] } id={ obj.name } variant='standard' className={ styles.textField } onBlur={ onblurhandler } />
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
