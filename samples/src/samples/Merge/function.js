import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';


const Function = () => {
  const sheet = useSelector((state => state.sheet));

  const [headerMerge, setHeaderMerge] = useState(0);
  const [dataMerge, setDataMerge] = useState(3);
  const [prevColumnMerge, setPrevColumnMerge] = useState(0);

  const onChangeHeaderMerge = useCallback((e) => {
    setHeaderMerge(e.target.value);
    sheet[0].setAutoMerge({headerMerge:e.target.value, dataMerge: dataMerge, prevColumnMerge: prevColumnMerge});
 }, [dataMerge, prevColumnMerge, sheet]);

  const onChangeDataMerge = useCallback((e) => {
    console.log('onChangeDataMerge', escape);
    setDataMerge(e.target.value);
    sheet[0].setAutoMerge({headerMerge: headerMerge, dataMerge: e.target.value, prevColumnMerge: prevColumnMerge});
  }, [headerMerge, prevColumnMerge, sheet]);

  const onChangePrevColumnMerge = useCallback((e) => {
    console.log('onChangePrevColumnMerge', e);
    setPrevColumnMerge(e.target.value);
    sheet[0].setAutoMerge({headerMerge: headerMerge, dataMerge: dataMerge, prevColumnMerge: e.target.value});
  }, [dataMerge, headerMerge, sheet]);

  return (
    <>
      HeaderMerge: 
      <Select
        labelId="header-merge-label"
        id="header-merge-label"
        value={headerMerge}
        onChange={onChangeHeaderMerge}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      DataMerge: 
      <Select
        labelId="data-merge-label"
        id="data-merge-label"
        value={dataMerge}
        onChange={onChangeDataMerge}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      PrevColumnMerge: 
      <Select
        labelId="prev-column-merge-label"
        id="prev-column-merge-select"
        value={prevColumnMerge}
        onChange={onChangePrevColumnMerge}
      >
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
    </>
  );
};

export default Function;