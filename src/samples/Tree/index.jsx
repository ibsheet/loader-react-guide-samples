/* eslint-disable */
import React, { useEffect, useMemo, useRef } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Tree = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'Tree';
  const title = '트리 예제';
  const subTitle = '트리 + 지연 로딩(예시) 이벤트 포함';
  const menuIndex = 3;

  // 이미 로딩한 row 키를 추적 (지연로딩 중복방지)
  const loadedSet = useRef(new Set());

  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,
      HeaderMerge: 3,
      CustomScroll: 1,
      MainCol: 'Sol',
      Style: 'IBMR'
    },
    LeftCols: [
      { Type: 'Int', Width: 50, Align: 'Center', Name: 'SEQ', CanEdit: 0 }
    ],
    Cols: [
      {
        Header: '솔루션 팀',
        Type: 'Text',
        Name: 'Sol',
        MinWidth: 220,
        Align: 'Left',
        RelWidth: 1
      },
      ...['Y202101','Y202102','Y202103','Y202104','Y202105'].map(m => ({
        Header: m.replace('Y2021','2021/'),
        Type: 'Int',
        Name: m,
        Width: 90,
        Align: 'Right',
        FormulaRow: 'Sum',
        CanEdit: 0,
        Format: '#,###'
      }))
    ],
    Events: {
      onNodeExpand: async evt => {
        const { row, sheet } = evt;
        if (!row) return;

        // 예: row 에 HasChildren 플래그만 있고 아직 children 미로드 상태인 경우
        if (row._NeedLazy && !loadedSet.current.has(row.id)) {
          loadedSet.current.add(row.id);
          // 로딩 스피너 표시 (API 존재 가정)
            sheet.showMessage && sheet.showMessage('하위 노드 로딩중...', 2, 1);
          try {
            // 가상의 비동기 호출
            const children = await fakeFetchChildren(row);
            // IBSheet 버전에 맞는 자식 추가 API (예: sheet.addRows / sheet.appendTreeChildren 등)
            if (sheet.addRows) {
              sheet.addRows({
                Parent: row,
                Rows: children
              });
            }
          } finally {
            sheet.hideMessage && sheet.hideMessage();
          }
        }
      },
      // onAfterValueChange: evt => {
      //   // 편집 허용 시 상위 합계 재계산 로직 (대부분 FormulaRow Sum 자동)
      // },
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

// 지연 로딩용 가짜 API
async function fakeFetchChildren(parentRow) {
  // 네트워크 지연 시뮬레이션
  await new Promise(r => setTimeout(r, 400));
  // parentRow.id 기반으로 자식 구성 (실제는 서버에서 내려줌)
  return [
    {
      Sol: parentRow.Sol + ' - 하위A',
      Y202101: 10, Y202102: 20, Y202103: 15, Y202104: 5, Y202105: 12,
      _NeedLazy: false
    },
    {
      Sol: parentRow.Sol + ' - 하위B',
      Y202101: 4, Y202102: 7, Y202103: 8, Y202104: 6, Y202105: 3,
      _NeedLazy: false
    }
  ];
}

export default Tree;