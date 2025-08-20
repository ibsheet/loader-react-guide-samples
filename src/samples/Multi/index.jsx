/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import { multiData1, multiData2, multiData3 } from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Multi = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'Multi';
  const title = '여러 개의 시트';
  const subTitle = '여러 개의 시트를 각 컴포넌트 별로 생성할 수 있습니다. onRenderFirstFinishAll 이벤트 에서 마지막에 생성된 시트 객체를 알 수 있습니다.';
  const menuIndex = 9;

  // 공통 Cfg / LeftCols
  const baseCfg = useMemo(() => ({
    SearchMode: 0,
    CustomScroll: 1,
    Style: 'IBMR'
  }), []);

  const baseLeftCols = useMemo(() => ([
    {
      Header: '상품',
      Type: 'Text',
      Name: 'goods',
      Width: 90,
      CanEdit: 0
    }
  ]), []);

  // 특정 월 범위를 받아 컬럼 정의 생성
  const buildMonthCols = (start, end) => {
    const monthNames = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    return Array.from({ length: end - start + 1 }, (_, i) => {
      const monthIndex = start - 1 + i;
      return {
        Header: `${start + i}월`,
        Type: 'Int',
        Name: monthNames[monthIndex],
        Width: 70
      };
    });
  };

  const sheetOptions1 = useMemo(() => ({
    Cfg: baseCfg,
    LeftCols: baseLeftCols,
    Cols: buildMonthCols(1, 4),
    Events: {
      // onRenderFirstFinishAll: evt => { ... }  // 모든 시트 최초 렌더 완료시 (전역적으로 한 곳에서만 설정해도 됨)
    }
  }), [baseCfg, baseLeftCols]);

  const sheetOptions2 = useMemo(() => ({
    Cfg: baseCfg,
    LeftCols: baseLeftCols,
    Cols: buildMonthCols(5, 8),
    Events: {}
  }), [baseCfg, baseLeftCols]);

  const sheetOptions3 = useMemo(() => ({
    Cfg: baseCfg,
    LeftCols: baseLeftCols,
    Cols: buildMonthCols(9, 12),
    Events: {}
  }), [baseCfg, baseLeftCols]);

  // 각각의 시트 옵션 객체
  const options1 = useMemo(() => ({
    id: 'sheet1',
    el: 'sheetDiv1',
    height: '100%',
    width: '33%',
    options: sheetOptions1,
    data: multiData1
  }), [sheetOptions1]);

  const options2 = useMemo(() => ({
    id: 'sheet2',
    el: 'sheetDiv2',
    height: '100%',
    width: '33%',
    options: sheetOptions2,
    data: multiData2
  }), [sheetOptions2]);

  const options3 = useMemo(() => ({
    id: 'sheet3',
    el: 'sheetDiv3',
    height: '100%',
    width: '33%',
    options: sheetOptions3,
    data: multiData3
  }), [sheetOptions3]);

  // 필요하다면 createSampleBatch 같은 액션을 만들어 한 번에 디스패치 가능
  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options1, menuIndex));
    dispatch(createSample(name, title, subTitle, options2, menuIndex));
    dispatch(createSample(name, title, subTitle, options3, menuIndex));
    return () => {
      removeSample && dispatch(removeSample());
    };
  }, [dispatch, name, title, subTitle, options1, options2, options3, menuIndex]);

  return <Content />;
});

export default Multi;