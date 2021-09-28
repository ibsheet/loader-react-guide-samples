/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { typeData } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'modules';

const Type = () => {
  const dispatch = useDispatch();
  const name = 'Type';
  const title = '컬럼 별 타입';
  const subTitle = '각 컬럼별 설정 가능한 Type에 대한 예제입니다.';
  const data = typeData;

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
        Width: 90,
        Align: 'Right',
        Format: '#,##0'
      },
      {
        Header: '실수(Float)',
        Type: 'Float',
        Name: 'FloatData',
        Width: 110,
        Align: 'Right',
        Format: '#,##0.######'
      },
      {
        Header: '날짜(Date)',
        Type: 'Date',
        Name: 'DateData',
        Width: 170,
        Align: 'Center',
        EmptyValue: '날짜를 입력해주세요'
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
        Width: 100
      }
    ],
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(data);
      }
    }
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions,
  };

  useEffect(() => {
    console.log(name, title, subTitle, options, data);
    dispatch(createSample(name, title, subTitle, options, data));
    return () => {
      console.log('Remove Merge Samples')
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
