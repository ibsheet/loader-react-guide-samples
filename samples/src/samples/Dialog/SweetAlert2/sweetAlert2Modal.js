import React from 'react';
import Button from '@material-ui/core/Button';
import SheetDialog from 'samples/Dialog/Common/dialogCreate';
import dialogOptions from 'samples/Dialog/Common/dialogOption';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useStyles from './style';

const SweetAlert2Modal = () => {
  const MySwal = withReactContent(Swal);

  const swalHandler = () => {
    MySwal.fire({
      title: 'SweetAlert2',
      html: <SheetDialog options={ dialogOptions }/>,
      confirmButtonText:'Close',
    });
  }

  const classes = useStyles();

  return (
    <>
      <Button variant='primary' onClick={ swalHandler } className={ classes.btnStyle }>SweetAlert2</Button>
    </>
  );
}

export default SweetAlert2Modal;
