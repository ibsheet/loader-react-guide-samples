/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Merge = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'Merge';
  const title = '자동 머지 기능';
  const subTitle = '헤더, 데이터 영역의 각 셀들의 값이 같은 경우 자동으로 병합시킬 수 있습니다.';
  const menuIndex = 1;

  // 머지 자동 적용을 원한다면 cls1/cls2/cls3 컬럼에 CanMerge:1 (또는 Merge:1) 등을 추가 (IBSheet 버전 매뉴얼 참고)
  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
      // 필요 시 전역 머지 관련 옵션 (예: MergeCells 등) 추가
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
        Header: ['분류', '대분류'],
        Type: 'Text',
        Name: 'cls1',
        Width: 130
        // CanMerge: 1  // (필요 시)
      },
      {
        Header: ['분류', '중분류'],
        Type: 'Text',
        Name: 'cls2',
        Width: 130
        // CanMerge: 1
      },
      {
        Header: ['분류', '소분류'],
        Type: 'Text',
        Name: 'cls3',
        Width: 130
        // CanMerge: 1
      },
      {
        Header: ['제품', '제품'],
        Type: 'Text',
        Name: 'goods',
        Width: 120
        // 기존 Format: '#,##0' → 텍스트라 의미 없어서 제거
      },
      {
        Header: ['제품','가격'],
        Type: 'Int',          // 가격은 숫자형
        Name: 'price',
        Width: 120,
        Format: '#,##0 원'
      },
      {
        Header: ['제품','상세설명'],
        Type: 'Text',
        Name: 'etc',
        Width: 180,
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
    data
  }), [sheetOptions]);

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, menuIndex));
    return () => {
      dispatch(removeSample());
    };
  }, [dispatch, name, title, subTitle, options, menuIndex]);

  return <Content />;
});

export default Merge;