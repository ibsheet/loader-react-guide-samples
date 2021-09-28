import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const FormDiv = () => {

  const useStyles = makeStyles((theme) => ({
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
      paddingBottom: '55px'
    },
    textfield: {
      width: '70%'
    }
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divCol }>
      <div className={ classes.divInner }>
        <div className={ classes.divTitle }>
          <label className={ classes.labelTitle }>상세보기</label>
        </div>
        <div className={ classes.divContent }>
          <div className={ classes.divComp }>
            <TextField id="sbasic-1" label="이름" variant="standard" className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField id="sbasic-2" label="나이" variant="standard" className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField id="sbasic-3" label="직책" variant="standard" className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField id="sbasic-4" label="월급" variant="standard" className={ classes.textfield } />
          </div>
          <div className={ classes.divComp }>
            <TextField id="sbasic-5" label="부서" variant="standard" className={ classes.textfield } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDiv;
