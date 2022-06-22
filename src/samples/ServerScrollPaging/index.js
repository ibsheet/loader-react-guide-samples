/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/View/Content';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';

const ServerScrollPaging = () => {
  const dispatch = useDispatch();
  const name = 'ServerScrollPaging';
  const title = '서버 스크롤 페이징';
  const subTitle = '서버에서 데이터를 받아서 스크롤 페이징을 하는 방법을 소개합니다.';
  const menuIndex = 7;

  const sheetOptions = {
    Cfg: {
      SearchMode: 3,
      CustomScroll: 1,
      Style: 'IBMR',
      SuppressMessage: 4
    },
    LeftCols: [
      {
        Type: 'Int',
        Name: 'SEQ'
      }
    ],
    Cols: [
      {
        Header: '확인',
        Type: 'Bool',
        Name: 'sCheck',
        RelWidth: 1
      },
      {
        Header: '회사',
        Type: 'Text',
        Name: 'sCompany',
        RelWidth: 1
      },
      {
        Header: '판매 국가',
        Type: 'Text',
        Name: 'sCountry',
        RelWidth: 1
      },
      {
        Header: '판매 수량',
        Type: 'Int',
        Name: 'sSaleQuantity',
        RelWidth: 1
      },
      {
        Header: '판매 증가량',
        Type: 'Int',
        Name: 'sSaleIncrease',
        RelWidth: 1
      },
      {
        Header: '가격',
        Type: 'Int',
        Name: 'sPrice',
        Format: '#,### \\원',
        Width: '180',
        RelWidth: 1
      },
      {
        Header: '만족도',
        Type: 'Int',
        Name: 'sSatisfaction',
        Format: '# \\%',
        RelWidth: 1
      },
      {
        Header: '코멘트',
        Type: 'Text',
        Name: 'sComment',
        RelWidth: 1
      },
    ],
    Events: {}
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions,
    data: []
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, menuIndex));
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

export default ServerScrollPaging;
