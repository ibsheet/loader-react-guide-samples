import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

export default useStyles;