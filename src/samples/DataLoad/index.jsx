/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

// 대용량 조회 (클라이언트 초기 구조 + 별도 LoadFunction 으로 데이터 주입)
const DataLoad = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'DataLoad';
  const title = '대용량 조회';
  const subTitle = 'IBSheet8 은 새로운 렌더방식을 이용해, 대용량 데이터 조회/조작을 사용할 수 있습니다.';
  const menuIndex = 4;

  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,        // 기존 유지. (LoadFunction 에서 커스텀 로딩 / batch 처리)
      CustomScroll: 1,
      Style: 'IBMR',
      NoDataMessage: 3,
      NoDataMiddle: true
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
      }
    ],
    Events: {}
  }), []);

  const options = useMemo(() => ({
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions,
    data: [] // 초기 빈 데이터 (LoadFunction / 외부 트리거로 채움)
  }), [sheetOptions]);

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, menuIndex));
    return () => {
      dispatch(removeSample());
    };
  }, [dispatch, name, title, subTitle, options, menuIndex]);

  return <Content />;
});

export default DataLoad;