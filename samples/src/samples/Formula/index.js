/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { formulaData as data } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'modules';

const Formula = () => {
  const dispatch = useDispatch();
  const name = 'Formula';
  const title = '포뮬러 기능';
  const subTitle = '포뮬러를 이용하여 자동값 계산 또는 속성을 설정할 수 있습니다.'

  const sheetOptions = {
    Def: {
      Row: {
        CanFormula: 1,
        CalcOrder: 'sTheaterColor,sSeatColor,sNormalColor,sDigital2Color,sDigital4TextColor,sDigital4Color,sNote'
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
        ColorFormula: 'Value < 10 ? \'Green\' : \'\'',
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
        ColorFormula: 'Value > 5000 ? \'Gray\' : \'\'',
        Width: 150
      },
      {
        Header: '일반',
        Name: 'sNormal',
        Type: 'Int',
        ColorFormula: 'Value > 10 ? \'Purple\' : \'\'',
        Width: 100
      },
      {
        Header: 'Digital 2D',
        Name: 'sDigital2',
        Type: 'Int',
        ColorFormula: 'Value > 100 ? \'Red\' : \'\'',
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
        ColorFormula: 'Value > 1 ? \'Black\' : \'\'',
        TextColorFormula: 'Value > 1 ? \'Yellow\' : \'\'',
        Width: 100
      },
      {
        Header: 'Digital IMAX',
        Name: 'sDigitalImax',
        Type: 'Int',
        Width: 100
      },
      {
        Header: '전체 합계',
        Name: 'sNote',
        Type: 'Text',
        RelWidth: 1,
        Formula: fr => fr.Row.sTheater + fr.Row.sScreen + fr.Row.sSeat + fr.Row.sNormal + fr.Row.sDigital2 + fr.Row.sDigital3 + fr.Row.sDigital4 + fr.Row.sDigitalImax
      }
    ],
    Events: {}
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions,
    data: data
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options));
    return () => {
      dispatch(removeSample());
    }
  }, []);

  return (
  <>
    <Content />
  </>
  );
}

export default Formula;