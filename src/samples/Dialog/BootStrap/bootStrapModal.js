import React, { useState } from 'react';
import SheetDialog from 'samples/Dialog/Common/dialogCreate';
import dialogOptions from 'samples/Dialog/Common/dialogOption';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import styles from 'assets/styles/samples/bootstrap.module.css';

const BootStrapModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant='contained' color='secondary' onClick={ handleOpen } className={ styles.button }>BootStrap</Button>
      <Modal show={ open } className= { styles.content } centered size='lg' style={{ top: '50%', left: '50%'}}>
        <Modal.Header closeButton onHide={ handleClose } className={ styles.header }>
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
