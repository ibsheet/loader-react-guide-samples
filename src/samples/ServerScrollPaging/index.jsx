/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const ServerScrollPaging = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'ServerScrollPaging';
  const title = '서버 스크롤 페이징';
  const subTitle = '서버에서 데이터를 받아 스크롤 위치에 따라 추가 로딩하는 방법 예제입니다.';
  const menuIndex = 7;

  // 시트 옵션 메모이제이션
  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 3,         // 3 = Server Scroll Paging
      CustomScroll: 1,
      Style: 'IBMR',
      SuppressMessage: 4,    // 메시지 억제 레벨 (onBeforeDataLoad 등에서 importance 계산에 사용)
      // PageLength: 200,     // (선택) 한번에 가져올 row 수 (서버와 합의된 값)
      // MaxLoad: 10000,      // (선택) 최대 로딩 허용량 (초과 시 추가 로딩 중단)
      // LazyUpdate: 1,       // (선택) 스크롤 시 렌더 지연 최적화
      // AutoFitColWidth: "sComment", // (선택) 특정 컬럼 자동폭 조정
    },
    LeftCols: [
      { Type: 'Int', Name: 'SEQ', Width: 60 }
    ],
    Cols: [
      {
        Header: '확인',
        Type: 'Bool',
        Name: 'sCheck',
        RelWidth: 1,
        CanEdit: 1
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
        RelWidth: 1,
        Format: '#,###'
      },
      {
        Header: '판매 증가량',
        Type: 'Int',
        Name: 'sSaleIncrease',
        RelWidth: 1,
        Format: '#,###'
      },
      {
        Header: '가격',
        Type: 'Int',
        Name: 'sPrice',
        Format: '#,### \\원',
        Width: 180,
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
      }
    ],
    Events: {
      // onBeforeDataLoad: evt => {
      //   // IBSheet8 전역 eventBinding 에서 처리 중이라면 중복 정의 불필요
      // },
      onSearchFinish: evt => {
        // 첫 페이지 이후 추가 로딩 시점 등에서 로그나 사용자 안내 가능
        // console.log('Search/Scroll paging batch loaded. Total rows now:', evt.sheet.getDataRows().length);
      },
      // onScrollPaging: evt => {
      //   // (버전 지원 시) 다음 페이지 요청 직전 콜백 - 커스텀 파라미터 추가 등
      //   // evt.Param.PageNo 등 접근 가능 여부는 매뉴얼 확인
      // },
      // onDataLoad: evt => {
      //   // 개별 배치 데이터 수신 직후 처리
      // }
    }
  }), []);

  const options = useMemo(() => ({
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions,
    data: []   // 서버 스크롤 페이징: 초기 빈 배열
  }), [sheetOptions]);

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, menuIndex));
    return () => {
      dispatch(removeSample());
    };
  }, [dispatch, name, title, subTitle, options, menuIndex]);

  return <Content />;
});

export default ServerScrollPaging;