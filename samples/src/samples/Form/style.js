import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  divCol: {
    display: 'flex',
    justifyContent: 'center',
    width: '30%',
    border: '1px solid #cfd1d6'
  },
  divInner: {
    width: '100%'
  },
  divTitle: {
    height: '15%',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  labelTitle: {
    color: '#000',
    fontSize: '2.0rem',
    fontWeight: 'bold',
    margin: 'auto'
  },
  divContent: {
    textAlign: 'center',
  },
  divComp: {
    width: '100%',
    paddingTop: '25px',
    paddingBottom: '55px'
  },
  textfield: {
    width: '70%'
  }
}));

export default useStyles;