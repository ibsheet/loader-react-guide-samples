/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { bigData } from 'data/samplesData';

const DataLoad = () => {
  const title = '대용량 조회';
  const subTitle = 'IBSheet8 은 새로운 렌더방식을 이용해, 대용량 데이터 조회/조작을 사용할 수 있습니다.';
  const func = {};

  const options = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
    },
    LeftCols: [
      {
        Header: ['No', 'No'],
        Type: 'Int',
        Name: 'SEQ',
        Width: 80
      }
    ],
    Cols: [
      {
        Header: ['확인', '확인'],
        Type: 'Bool',
        Name: 'sCheck',
        Width: 60
      },
      {
        Header: ['회사', '회사'],
        Type: 'Text',
        Name: 'sCompany',
        Width: 150
      },
      {
        Header: ['판매 국가', '판매 국가'],
        Type: 'Text',
        Name: 'sCountry',
        Width: 150
      },
      {
        Header: ['판매 수량', '판매 수량'],
        Type: 'Int',
        Name: 'sSaleQuantity',
        Width: 100
      },
      {
        Header: ['판매 증가량', '판매 증가량'],
        Type: 'Int',
        Name: 'sSaleIncrease',
        Width: 100
      },
      {
        Header: ['가격', '가격'],
        Type: 'Int',
        Name: 'sPrice',
        Format: '#,### \\원',
        Width: 180
      },
      {
        Header: ['만족도', '만족도'],
        Type: 'Int',
        Name: 'sSatisfaction',
        Format: '# \\%',
        Width: 180
      },
      {
        Header: ['코멘트', '코멘트'],
        Type: 'Text',
        Name: 'sComment',
        RelWidth: 1
      },
    ],
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(bigData(100000));
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
      <Content title={ title } subTitle={ subTitle } func={ func } sheet={ [sheet] }/>
    </>
  );
}

export default DataLoad;
