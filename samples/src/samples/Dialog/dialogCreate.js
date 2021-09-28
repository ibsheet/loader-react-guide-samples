/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import loader from '@ibsheet/loader';
import { DialogData as data } from 'data/samplesData';

const SheetDialog = ({ options }) => {

  const getId = id => id;
  const getEl = el => el;
  const getOpt = opt => opt;

  const useMemoId = useMemo(() => getId(options.id), [options.id]);
  const useMemoEl = useMemo(() => getEl(options.el), [options.el]);
  const useMemoOpt = useMemo(() => getOpt(options.options), [options.options]);

  const elStyle = ({ height }) => {
    return {
      width: '100%',
      height: height || 'inherit',
    }
  }

  useEffect(() => {
    loader.createSheet({
      id: useMemoId,
      el: useMemoEl,
      options: useMemoOpt,
      data: data
    })
    .then((sheet) => {
      console.log('createSheet', sheet.id);
    });
    return () => {
      loader.removeSheet(useMemoId);
    }
  }, []);

  return (
    <>
      <div id={ useMemoEl } style={ elStyle('100%') }></div>
    </>
  );
}

export default SheetDialog;
