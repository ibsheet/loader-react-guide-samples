/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';
import IB_Preset from 'config/common';

const Type = () => {
  const dispatch = useDispatch();
  const name = 'Type';
  const title = '컬럼 별 타입';
  const subTitle = '각 컬럼별 설정 가능한 Type에 대한 예제입니다.';

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      {
        Type: 'Int',
        Name: 'SEQ'
      }
    ],
    Cols: [
      {
        Header: '문자열(Text)',
        Type: 'Text',
        Name: 'TextData',
        Width: 130,
        Align: 'Center',
      },
      {
        Header: '콤보(Enum)',
        Type: 'Enum',
        Name: 'ComboData',
        Width: 100,
        Align: 'Right',
        Enum: '|대기|진행중|완료',
        EnumKeys: '|01|02|03'
      },
      {
        Header: '버튼(Button)',
        Type: 'Button',
        Name: 'ISO',
        Width: 120,
        Align: 'Left',
        CanEdit: 0,
        Button: 'Button'
      },
      {
        Header: '정수(Int)',
        Type: 'Int',
        Name: 'IntData',
        Extend: IB_Preset.Integer
      },
      {
        Header: '실수(Float)',
        Type: 'Float',
        Name: 'FloatData',
        Extend: IB_Preset.Float,
      },
      {
        Header: '날짜(Date)',
        Type: 'Date',
        Name: 'DateData',
        Align: 'Center',
        Extend: IB_Preset.YMD,
      },
      {
        Header: '패스워드(Pass)',
        Type: 'Pass',
        Name: 'PassData',
        Align: 'Center',
        Width: 120
      },
      {
        Header: '라디오(Radio)',
        Type: 'Radio',
        Name: 'RadioData',
        Width: 140,
        Align: 'Center',
        CanEdit: 1,
        Enum: '|상|중|하',
        EnumKeys: '|H:1|M:1|L:1'
      },
      {
        Header: {
          Value: '체크(Bool)',
          HeaderCheck: 1
        },
        Type: 'Bool',
        Name: 'CheckData',
        Align: 'Center',
        CanEdit: 1,
        RelWidth: 1
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

export default Type;
