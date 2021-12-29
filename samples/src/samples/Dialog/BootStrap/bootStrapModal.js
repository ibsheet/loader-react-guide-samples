import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import SheetDialog from 'samples/Dialog/Common/dialogCreate';
import dialogOptions from 'samples/Dialog/Common/dialogOption';
import Modal from 'react-bootstrap/Modal';
import useStyles from './style';

const BootStrapModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <>
      <Button variant='primary' onClick={ handleOpen } className={ classes.btnStyle }>BootStrap</Button>
      <Modal show={ open } className= { classes.bcontent } centered size='lg'>
        <Modal.Header closeButton onHide={ handleClose } className={ classes.modalTitle }>
          <Modal.Title>BootStrap Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
              <SheetDialog options={ dialogOptions }/>
            }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BootStrapModal;
