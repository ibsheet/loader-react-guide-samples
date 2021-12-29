import React from 'react';
import MaterailModal from 'samples/Dialog/Material/materialModal';
import BootStrapModal from 'samples/Dialog/BootStrap/bootStrapModal';
import SweetAlert2Modal from 'samples/Dialog/SweetAlert2/sweetAlert2Modal';
import useStyles from './style';

const DialogSheet = () => {
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
