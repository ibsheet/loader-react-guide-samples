import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IBSheet8 from 'components/SheetCreate';

const DialogSheet = ({ dialog }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  debugger;

  const useStyles = makeStyles((theme) => ({
    btnStyle: {
      float: 'right',
      height: '30px'
    },
    modalTitle: {
      textAlign: 'center'
    },
    mcontent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      backgroundColor: '#fff',
      border: '2px solid #000',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Button variant='contained' onClick={ handleOpen } className={ classes.btnStyle }>Dialog</Button>
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
            <IBSheet8 id={ dialog.id } el={ dialog.el } width={ dialog.width } height={ dialog.height } options={ dialog.options } />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default DialogSheet;
