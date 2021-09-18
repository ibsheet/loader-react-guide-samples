/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { subData } from 'data/samplesData';

const SubSum = () => {
  const title = '소계 기능';
  const subTitle = '특정 컬럼을 기준으로, 지정한 컬럼들에 대한 소계 값을 보여주는 기능입니다.';
  const func = {};

  const options = {
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(subData);
      },
      onDataLoad: (evt) => {
        // onDataLoad 에서 소계
        evt.sheet.makeSubTotal([
          {
            stdCol: 'sPolicy',
            sumCols: 'A|B|C|D',
            position: 'bottom',
            captionCol: [
              {
                col: 'sPolicy',
                val: '%s: %col',
                cumVal: '%s: %col',
                span: 3
              },
              {
                col: 'E',
                val: ' ',
                cumVal: ' ',
                span: 2
              }
            ],
          }
        ]);
      }
    }
  };

  const sheet = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: options
  };

  return (
    <>
      <Content title={ title } subTitle={ subTitle } func={ func } sheet={ sheet }/>
    </>
  );
}

export default SubSum;
