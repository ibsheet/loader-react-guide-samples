import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SheetDialog from '../Common/dialogCreate';
import dialogOptions from '../Common/dialogOption';
import { FaTimes } from 'react-icons/fa';
import styles from '../../../assets/styles/samples/material.module.css';

const MaterailModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant='contained' color='primary' onClick={ handleOpen } className={ styles.button }>material UI</Button>
      <Modal
      open={ open }
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      >
        <Box className={ styles.content }>
          <Typography id='modal-modal-title' variant='h6' component='h2' className={ styles.title }>
            Material Modal
            <FaTimes size='20' className={ styles.icon } onClick={ handleClose } />
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
