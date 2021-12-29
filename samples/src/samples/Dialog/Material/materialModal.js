import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SheetDialog from 'samples/Dialog/Common/dialogCreate';
import dialogOptions from 'samples/Dialog/Common/dialogOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useStyles from './style';

const MaterailModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
