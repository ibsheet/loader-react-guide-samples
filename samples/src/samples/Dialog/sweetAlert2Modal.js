import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SheetDialog from 'samples/Dialog/dialogCreate';
import dialogOptions from 'samples/Dialog/dialogOption';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SweetAlert2Modal = () => {
  const MySwal = withReactContent(Swal);

  const swalHandler = () => {
    MySwal.fire({
      title: 'SweetAlert2',
      html: <SheetDialog options={ dialogOptions }/>,
      confirmButtonText:"Close",
    });
  }

  const useStyles = makeStyles((theme) => ({
    btnStyle: {
      backgroundColor: '#d63384',
      color: '#fff',
      float: 'right',
      height: '30px',
      marginRight: '14px'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Button variant='primary' onClick={ swalHandler } className={ classes.btnStyle }>SweetAlert2</Button>
    </>
  );
}

export default SweetAlert2Modal;
