/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';

const ServerPaging = () => {
  const title = '서버 스크롤 페이징';
  const subTitle = '세로 스크롤바를 최하단으로 내릴때 마다 다음 데이터를 append 하는 형식으로 지원합니다.';
  const description = '꺄';
  const func = {};

  const options = {
    Cfg: {
      SearchMode: 3,
      PageLength: 50,
      CustomScroll: 1
    },
    LeftCols: [
      {
        Header: ['No', 'No'],
        Type: 'Int',
        Name: 'SEQ'
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
        // const res = fetch().
        // then(res => {
        //   debugger;
        // });
        // evt.sheet.doSearchPaging({
        //   url: `components/data/${path}`,
        //   param: 'data=50&total=10000&searchMode=' + evt.sheet.SearchMode,
        //   method: 'GET',
        //   callback: success => {

        //   }
        // });
      }
    }
  };

  return (
    <>
      <Content title={ title } subTitle={ subTitle } description={ description } func={ func } options={ options }/>
    </>
  );
}

export default ServerPaging;
