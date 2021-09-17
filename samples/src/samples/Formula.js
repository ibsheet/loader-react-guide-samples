/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { formulaData } from 'data/samplesData';

const Formula = () => {

  const title = '포뮬러 기능';
  const func = {};

  const options = {
    Def: {
      Row: {
        CanFormula: 1,
        CalcOrder: 'sTheaterTextColor,sSeatTextColor,sNormalTextColor,sDigital2TextColor,sDigital4TextColor'
      }
    },
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
    },
    LeftCols: [
      {
        Header: 'No',
        Type: 'Int',
        Name: 'SEQ'
      }
    ],
    Cols: [
      {
        Header: '지역',
        Name: 'sArea',
        Type: 'Text',
        Align: 'Center',
        Width: 150
      },
      {
        Header: '영화상영관수',
        Name: 'sTheater',
        Type: 'Int',
        TextColorFormula: 'Value > 20 ? \'Red\' : \'\'',
        Width: 100
      },
      {
        Header: '스크린수',
        Name: 'sScreen',
        Type: 'Int',
        Width: 100
      },
      {
        Header: '좌석수',
        Name: 'sSeat',
        Type: 'Int',
        TextColorFormula: 'Value > 20000 ? \'Gray\' : \'\'',
        Width: 150
      },
      {
        Header: '일반',
        Name: 'sNormal',
        Type: 'Int',
        TextColorFormula: 'Value > 10 ? \'Purple\' : \'\'',
        Width: 100
      },
      {
        Header: 'Digital 2D',
        Name: 'sDigital2',
        Type: 'Int',
        TextColorFormula: 'Value > 100 ? \'Red\' : \'\'',
        Width: 100
      },
      {
        Header: 'Digital 3D',
        Name: 'sDigital3',
        Type: 'Int',
        Width: 100
      },
      {
        Header: 'Digital 4D',
        Name: 'sDigital4',
        Type: 'Int',
        TextColorFormula: 'Value > 1 ? \'Green\' : \'\'',
        Width: 100
      },
      {
        Header: 'Digital IMAX',
        Name: 'sDigitalImax',
        Type: 'Int',
        Width: 100
      },
      {
        Header: '비고',
        Name: 'sNote',
        Type: 'Text',
        RelWidth: 1
      }
    ],
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(formulaData);
      }
    }
  };

  return (
  <>
    <Content title = { title } func = { func } options = { options }/>
  </>
  );
}

export default Formula;