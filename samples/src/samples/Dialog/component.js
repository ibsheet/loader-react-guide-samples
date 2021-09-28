import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterailModal from 'samples/Dialog/materialModal';
import BootStrapModal from 'samples/Dialog/bootStrapModal';
import SweetAlert2Modal from 'samples/Dialog/sweetAlert2Modal';

const DialogSheet = () => {
  const useStyles = makeStyles((theme) => ({
    divStyle: {
      display: 'flex',
      paddingBottom: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divStyle }>
      <MaterailModal />
      <BootStrapModal />
      <SweetAlert2Modal />
    </div>
  );
}

export default DialogSheet;
