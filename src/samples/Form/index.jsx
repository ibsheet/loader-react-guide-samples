/* eslint-disable */
import React, { useEffect, useMemo } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Form = React.memo(() => {
  const dispatch = useDispatch();
  const name = 'Form';
  const title = 'Form 형태를 이용한 상세보기';
  const subTitle = '시트와 form 간의 연동을 통해 행 선택시 내용을 form 에서 확인하고 form 의 내용을 수정하여 시트에 반영할 수 있습니다.';
  const menuIndex = 8;

  // 시트 옵션 메모이제이션
  const sheetOptions = useMemo(() => ({
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      {
        Header: 'No',
        Type: 'Int',
        Name: 'SEQ',
        Width: 80
      }
    ],
    Cols: [
      {
        Header: '이름',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sName'
      },
      {
        Header: '나이',
        Type: 'Int',
        MinWidth: 80,
        Name: 'sAge'
      },
      {
        Header: '직책',
        Type: 'Text',
        MinWidth: 100,
        Name: 'sPosi'
      },
      {
        Header: '월급',
        Type: 'Int',
        MinWidth: 100,
        Name: 'sPrice',
        Format: '#,### \\원'
      },
      {
        Header: '부서',
        Type: 'Text',
        RelWidth: 1,
        Name: 'sDepart'
      }
    ],
    Events: {
      // 필요 시 직접 폼 연동 이벤트 추가 (IBSheet8 전역 eventBinding 대신)
      // onFocus: evt => {
      //   // evt.row 에서 값 읽어 폼 상태 업데이트
      //   // 예: formDispatch(setFormValues({...}))
      // },
      // onAfterValueChange: evt => {
      //   // 셀 값 변경이 폼에도 즉시 반영되어야 한다면 여기서 처리
      // }
    }
  }), []);

  // options 객체 메모이제이션
  const options = useMemo(() => ({
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '70%',    // 폼이 오른쪽에 붙는 구조라면 70% 유지
    options: sheetOptions,
    data             // 초기 데이터
  }), [sheetOptions]);

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, menuIndex));
    return () => {
      dispatch(removeSample());
    };
  }, [dispatch, name, title, subTitle, options, menuIndex]);

  return <Content />;
});

export default Form;