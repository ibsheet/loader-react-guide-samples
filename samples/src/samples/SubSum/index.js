/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { subData as data } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';

const SubSum = () => {
  const dispatch = useDispatch();
  const name = 'SubSum'
  const title = '소계 기능';
  const subTitle = '특정 컬럼을 기준으로, 지정한 컬럼들에 대한 소계 값을 보여주는 기능입니다.';

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
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
        Header: '정책 사업',
        Name: 'sPolicy',
        Type: 'Text',
        MinWidth: 150,
        RelWidth: 1,
      },
      {
        Header: '단위 사업',
        Name: 'sUnit',
        Type: 'Text',
        MinWidth: 150,
        RelWidth: 1,
      },
      {
        Header: '세부사업',
        Name: 'sDetail',
        Type: 'Text',
        MinWidth: 150,
        RelWidth: 1
      },
      {
        Header: 'A',
        Name: 'A',
        Type: 'Int'
      },
      {
        Header: 'B',
        Name: 'B',
        Type: 'Int'
      },
      {
        Header: 'C',
        Name: 'C',
        Type: 'Int'
      },
      {
        Header: 'D',
        Name: 'D',
        Type: 'Int'
      },
      {
        Header: 'E',
        Name: 'E',
        Type: 'Int'
      },
      {
        Header: 'F',
        Name: 'F',
        Type: 'Int',
        'Formula': 'E + 10'
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

export default SubSum;
