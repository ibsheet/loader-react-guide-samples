import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SheetDialog from 'samples/Dialog/Common/dialogCreate';
import dialogOptions from 'samples/Dialog/Common/dialogOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const MaterailModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const useStyles = makeStyles((theme) => ({
    btnStyle: {
      backgroundColor: '#007FFF',
      color: '#fff',
      float: 'right',
      height: '30px',
      marginRight: '14px'
    },
    modalTitle: {
      textAlign: 'center',
      margin: '16px'
    },
    mcontent: {
      height: '600px',
      width: '80vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      overflow: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      border: '2px solid #000',
      zIndex: '1200'
    },
    modalIcon: {
      float: 'right',
      marginTop: '5px',
      cursor: 'pointer'
    }
  }));

  const classes = useStyles();

  return (
    <>
      <Button variant='contained' onClick={ handleOpen } className={ classes.btnStyle }>material UI</Button>
      <Modal
      open={ open }
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      >
        <Box className={ classes.mcontent }>
          <Typography id='modal-modal-title' variant='h6' component='h2' className={ classes.modalTitle }>
            Material Modal
            <FontAwesomeIcon icon={ faTimes } className={ classes.modalIcon } onClick={ handleClose } />
          </Typography>
          <div>
            {
              <SheetDialog options={ dialogOptions }/>
            }
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default MaterailModal;
