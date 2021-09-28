import React, { useState, useEffect, useRef} from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Function = () => {
  const sheet = useSelector(state => state.sheet);

  const [headerMerge, setHeaderMerge] = useState(0);
  const [dataMerge, setDataMerge] = useState(0);
  const [prevColumnMerge, setPrevColumnMerge] = useState(0);
  const mounted = useRef(false);

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
        setHeaderMerge(e.target.value);
        break;
      case 'dataMerge':
        setDataMerge(e.target.value);
        break;
      default:
        setPrevColumnMerge(e.target.value);
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
        labelId="header-merge-label"
        id="header-merge-label"
        name='headerMerge'
        value={ headerMerge }
        onChange={ changeHandler }
      >
        <MenuItem value={0}>HeaderMerge: 0</MenuItem>
        <MenuItem value={1}>HeaderMerge: 1</MenuItem>
        <MenuItem value={2}>HeaderMerge: 2</MenuItem>
        <MenuItem value={3}>HeaderMerge: 3</MenuItem>
        <MenuItem value={4}>HeaderMerge: 4</MenuItem>
        <MenuItem value={5}>HeaderMerge: 5</MenuItem>
        <MenuItem value={6}>HeaderMerge: 6</MenuItem>
      </Select>
      <Select
        className={ classes.selectStyle }
        labelId="data-merge-label"
        id="data-merge-label"
        name='dataMerge'
        value={ dataMerge }
        onChange={ changeHandler }
      >
        <MenuItem value={0}>DataMerge: 0</MenuItem>
        <MenuItem value={1}>DataMerge: 1</MenuItem>
        <MenuItem value={2}>DataMerge: 2</MenuItem>
        <MenuItem value={3}>DataMerge: 3</MenuItem>
        <MenuItem value={4}>DataMerge: 4</MenuItem>
        <MenuItem value={5}>DataMerge: 5</MenuItem>
        <MenuItem value={6}>DataMerge: 6</MenuItem>
      </Select>
      <Select
        className={ classes.selectStyle }
        labelId="prev-column-merge-label"
        id="prev-column-merge-select"
        name='prevColumnMerge'
        value={ prevColumnMerge }
        onChange={ changeHandler }
      >
        <MenuItem value={0}>PrevColumnMerge: 0</MenuItem>
        <MenuItem value={1}>PrevColumnMerge: 1</MenuItem>
        <MenuItem value={2}>PrevColumnMerge: 2</MenuItem>
        <MenuItem value={3}>PrevColumnMerge: 3</MenuItem>
      </Select>
    </div>
  );
};

export default Function;