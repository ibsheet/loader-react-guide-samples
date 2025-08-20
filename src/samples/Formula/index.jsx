/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Formula = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'Formula';
  const title = '포뮬러 기능';
  const subTitle = '포뮬러를 이용하여 자동값 계산 또는 속성을 설정할 수 있습니다.';
  const menuIndex = 5;

  // 시트 옵션 메모이제이션
  const sheetOptions = useMemo(() => ({
    Def: {
      Row: {
        CanFormula: 1,
        // 포뮬러/색상 계산 순서 (필요 시 마지막 sNote 가 전체 합계이므로 가장 뒤)
        CalcOrder: 'sTheaterColor,sSeatColor,sNormalColor,sDigital2Color,sDigital4TextColor,sDigital4Color,sNote'
      }
    },
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' }
    ],
    Cols: [
      {
        Header: '지역',
        Name: 'sArea',
        Type: 'Text',
        Align: 'Center',
        Width: 150
      },
      {
        Header: '영화상영관수',
        Name: 'sTheater',
        Type: 'Int',
        ColorFormula: "Value < 10 ? 'Green' : ''",
        Width: 100
      },
      {
        Header: '스크린수',
        Name: 'sScreen',
        Type: 'Int',
        Width: 100
      },
      {
        Header: '좌석수',
        Name: 'sSeat',
        Type: 'Int',
        ColorFormula: "Value > 5000 ? 'Gray' : ''",
        Width: 150
      },
      {
        Header: '일반',
        Name: 'sNormal',
        Type: 'Int',
        ColorFormula: "Value > 10 ? 'Purple' : ''",
        Width: 100
      },
      {
        Header: 'Digital 2D',
        Name: 'sDigital2',
        Type: 'Int',
        ColorFormula: "Value > 100 ? 'Red' : ''",
        Width: 100
      },
      {
        Header: 'Digital 3D',
        Name: 'sDigital3',
        Type: 'Int',
        Width: 100
      },
      {
        Header: 'Digital 4D',
        Name: 'sDigital4',
        Type: 'Int',
        ColorFormula: "Value > 1 ? 'Black' : ''",
        TextColorFormula: "Value > 1 ? 'Yellow' : ''",
        Width: 100
      },
      {
        Header: 'Digital IMAX',
        Name: 'sDigitalImax',
        Type: 'Int',
        Width: 100
      },
      {
        Header: '전체 합계',
        Name: 'sNote',
        Type: 'Text',
        RelWidth: 1,
        // 안전하게 0 기본값 적용 (데이터가 모두 보장되면 바로 합산 가능)
        Formula: fr => {
          const r = fr.Row;
            const v = (n) => {
            const val = r[n];
            return typeof val === 'number' ? val : (parseFloat(val) || 0);
          };
          return (
            v('sTheater') +
            v('sScreen') +
            v('sSeat') +
            v('sNormal') +
            v('sDigital2') +
            v('sDigital3') +
            v('sDigital4') +
            v('sDigitalImax')
          );
        }
        // 문자열 식으로 가능하다면 (문법 지원 확인 후):
        // Formula: "sTheater + sScreen + sSeat + sNormal + sDigital2 + sDigital3 + sDigital4 + sDigitalImax"
      }
    ],
    Events: {
      // 필요 시 계산 후 후처리
      // onCalculateFinish: evt => { console.log('Recalc done'); }
    }
  }), []);

  // options 메모이제이션
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

export default Formula;