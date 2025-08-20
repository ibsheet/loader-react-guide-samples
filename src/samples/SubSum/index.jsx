/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const SubSum = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'SubSum';
  const title = '소계 기능';
  const subTitle = '정책/단위 사업 단위로 합계를 계산하여 소계 행을 보여줍니다.';
  const menuIndex = 2;

  // (선택) 소계 대상/그룹 컬럼 상수화
  const GROUP_COLS = ['sPolicy', 'sUnit'];
  const SUM_COLS = ['A','B','C','D','E','F'];

  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR',
      // 필요 시 SubSumRowCss / SubSumColor 등 CSS/Style 옵션(버전 지원) 추가
    },
    LeftCols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ', Width: 60 }
    ],
    Cols: [
      {
        Header: '정책 사업',
        Name: 'sPolicy',
        Type: 'Text',
        MinWidth: 140,
        RelWidth: 1
      },
      {
        Header: '단위 사업',
        Name: 'sUnit',
        Type: 'Text',
        MinWidth: 140,
        RelWidth: 1
      },
      {
        Header: '세부사업',
        Name: 'sDetail',
        Type: 'Text',
        MinWidth: 150,
        RelWidth: 1
      },
      { Header: 'A', Name: 'A', Type: 'Int', Format: '#,###' },
      { Header: 'B', Name: 'B', Type: 'Int', Format: '#,###' },
      { Header: 'C', Name: 'C', Type: 'Int', Format: '#,###' },
      { Header: 'D', Name: 'D', Type: 'Int', Format: '#,###' },
      { Header: 'E', Name: 'E', Type: 'Int', Format: '#,###' },
      {
        Header: 'F',
        Name: 'F',
        Type: 'Int',
        Format: '#,###',
        Formula: 'E + 10'
      }
    ],
    Events: {
      onDataLoad: evt => {
        const sheet = evt.sheet;
        // 이미 소계가 있다면 초기화(메서드 명은 사용 버전 확인)
        if (sheet.clearSubSum) sheet.clearSubSum();

        // 실제 사용하는 소계/그룹 API 명칭으로 교체 필요
        // 예시 1) IBSheet V8 일부 패턴: sheet.showSubSum({GroupColumns: GROUP_COLS, SumColumns: SUM_COLS});
        // 예시 2) 커스텀 구현: makeSubSum
        if (sheet.makeSubSum) {
          sheet.makeSubSum({
            GroupCols: GROUP_COLS,
            SumCols: SUM_COLS,
            // ShowGrand: true,  // 총계 행
            // Position: 'bottom' // 소계 위치 조정 예시
          });
        } else if (sheet.showSubSum) {
          sheet.showSubSum({
            GroupColumns: GROUP_COLS,
            SumColumns: SUM_COLS
          });
        }
      },
      // 정렬 후 재계산 필요 시
      onAfterSort: evt => {
        const sheet = evt.sheet;
        if (sheet.clearSubSum && sheet.makeSubSum) {
          sheet.clearSubSum();
          sheet.makeSubSum({ GroupCols: GROUP_COLS, SumCols: SUM_COLS });
        }
      },
      // 필터 후 재계산 필요 시
      onFilterFinish: evt => {
        const sheet = evt.sheet;
        if (sheet.clearSubSum && sheet.makeSubSum) {
          sheet.clearSubSum();
          sheet.makeSubSum({ GroupCols: GROUP_COLS, SumCols: SUM_COLS });
        }
      }
    }
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

export default SubSum;