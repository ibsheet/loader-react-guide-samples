import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

export default useStyles;