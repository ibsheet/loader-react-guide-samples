import React from 'react';
import Button from '@mui/material/Button';
import SheetDialog from '../Common/dialogCreate';
import dialogOptions from '../Common/dialogOption';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../../../assets/styles/samples/sweetAlert2.module.css';

const SweetAlert2Modal = () => {
  const MySwal = withReactContent(Swal);

  const swalHandler = () => {
    MySwal.fire({
      title: 'SweetAlert2',
      html: <SheetDialog options={ dialogOptions }/>,
      confirmButtonText:'Close',
    });
  }

  return (
    <>
      <Button variant='contained' color='error' onClick={ swalHandler } className={ styles.button }>SweetAlert2</Button>
    </>
  );
}

export default SweetAlert2Modal;
