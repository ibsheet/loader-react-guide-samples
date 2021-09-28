import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SheetDialog from 'samples/Dialog/dialogCreate';
import dialogOptions from 'samples/Dialog/dialogOption';
import Modal from 'react-bootstrap/Modal';

const BootStrapModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles((theme) => ({
    btnStyle: {
      backgroundColor: '#6f42c1',
      color: '#fff',
      float: 'right',
      height: '30px',
      marginRight: '14px'
    },
    modalTitle: {
      textAlign: 'center',
      margin: '16px'
    },
    bcontent: {
      position: 'fiexd',
      top: '50%',
      left: '50%',
      overflow: 'auto',
      transform: 'translate(-50%, -50%)',
    }
  }));

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
