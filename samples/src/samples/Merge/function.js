import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Function = () => {
  const sheet = useSelector(state => state.sheet);

  const [headerMerge, setHeaderMerge] = useState(0);
  const [dataMerge, setDataMerge] = useState(0);
  const [prevColumnMerge, setPrevColumnMerge] = useState(0);
  const mounted = useRef(false);
  const mObj = ['0', '1', '2', '3', '4', '5', '6'];

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      sheet[0].setAutoMerge({headerMerge: headerMerge, dataMerge: dataMerge, prevColumnMerge: prevColumnMerge});
    }
    return () => {
    };
  }, [headerMerge, dataMerge, prevColumnMerge, sheet]);

  const changeHandler = (e) => {
    switch(e.target.name) {
      case 'headerMerge':
        setHeaderMerge(e.target.value - 0);
        break;
      case 'dataMerge':
        setDataMerge(e.target.value - 0);
        break;
      default:
        setPrevColumnMerge(e.target.value - 0);
    }
  }

  const useStyles = makeStyles((props) => ({
    divStyle: {
      display: 'flex',
      paddingBottom: '10px'
    },
    selectStyle: {
      flex: 1,
      textAlign: 'center',
      marginRight: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div className={ classes.divStyle }>
      <Select
        className={ classes.selectStyle }
        labelId='header-merge-label'
        id='header-merge-label'
        name='headerMerge'
        value={ headerMerge }
        onChange={ changeHandler }
      >
        {
          mObj.map((val, index) => (
            <MenuItem value={ val } key={ index }>HeaderMerge: { val }</MenuItem>
          ))
        }
      </Select>
      <Select
        className={ classes.selectStyle }
        labelId='data-merge-label'
        id='data-merge-label'
        name='dataMerge'
        value={ dataMerge }
        onChange={ changeHandler }
      >
        {
          mObj.map((val, index) => (
            <MenuItem value={ val } key={ index }>DataMerge: { val }</MenuItem>
          ))
        }
      </Select>
      <Select
        className={ classes.selectStyle }
        labelId='prev-column-merge-label'
        id='prev-column-merge-select'
        name='prevColumnMerge'
        value={ prevColumnMerge }
        onChange={ changeHandler }
      >
        {
          mObj.slice(0, 4).map((val, index) => (
            <MenuItem value={ val } key={ index }>PrevColumnMerge: { val }</MenuItem>
          ))
        }
      </Select>
    </div>
  );
};

export default Function;