/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect, useRef } from 'react';
import loader from '@ibsheet/loader';
import { DialogData as data } from 'data/samplesData';

const SheetDialog = () => {
  const id = 'sheetDialog';
  const el = 'sheetDialogDiv'

  const dialogOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
    },
    LeftCols: [
      {
        Header: 'No',
        Type: 'Int',
        Name: 'SEQ',
        Width: 80
      }
    ],
    Cols: [
      {
        Header: '이름',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sName'
      },
      {
        Header: '나이',
        Type: 'Int',
        MinWidth: 80,
        Name: 'sAge'
      },
      {
        Header: '직책',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sPosi'
      },
      {
        Header: '월급',
        Type: 'Int',
        MinWidth: 100,
        Name: 'sPrice'
      },
      {
        Header: '부서',
        Type: 'Text',
        RelWidth: 1,
        Name: 'sDepart'
      }
    ]
  }; 

  const elStyle = ({ height }) => {
    return {
      width: '100%',
      height: height || 'inherit',
    }
  }

  useEffect(() => {
    loader.createSheet({
      id: id,
      el: el,
      options: dialogOptions,
      data: data
    })
    .then((sheet) => {
      console.log('createSheet', sheet.id);
    });
    return () => {
      loader.removeSheet(id);
    }
  }, []);

  return (
    <>
      <div id={ el } style={ elStyle('100%') }></div>
    </>
  );
}

export default SheetDialog;
