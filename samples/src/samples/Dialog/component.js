import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SheetDialog from 'samples/Dialog/dialogCreate';
import dialogOptions from 'samples/Dialog/opts';

const DialogSheet = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles((theme) => ({
    divStyle: {
      display: 'flex',
      paddingBottom: '10px'
    },
    btnStyle: {
      backgroundColor: '#4c4c57',
      color: '#fff',
      float: 'right',
      height: '30px'
    },
    modalTitle: {
      textAlign: 'center'
    },
    mcontent: {
      height: '400px',
      width: '80vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      overflow: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      border: '2px solid #000',
    },
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divStyle }>
      <Button variant='contained' onClick={ handleOpen } className={ classes.btnStyle }>material UI</Button>
      <Modal
      open={ open }
      onClose={ handleClose }
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      >
        <Box className={ classes.mcontent }>
          <Typography id='modal-modal-title' variant='h6' component='h2' className={ classes.modalTitle }>
            Sheet-Dialog
          </Typography>
          <div>
            {
              <SheetDialog options={ dialogOptions }/>
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default DialogSheet;
