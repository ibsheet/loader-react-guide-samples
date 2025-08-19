/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import data from '../data';
import { IBSheetReact } from '@ibsheet/react';

const SheetDialog = ({ options }) => {
  const getOpt = opt => opt;

  const useMemoOpt = useMemo(() => getOpt(options.options), [options.options]);

  const elStyle = ({ height }) => {
    return {
      width: '100%',
      height: height || 'inherit',
    }
  }

  return (
    <IBSheetReact
      style={elStyle('100%')}
      data={data}
      options={useMemoOpt}
    />
  );
}

export default SheetDialog;
