/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from '../../components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../reducer';

const Form = () => {
  const dispatch = useDispatch();
  const name = 'Form';
  const title = 'Form 형태를 이용한 상세보기';
  const subTitle = '시트와 form 간의 연동을 통해 행 선택시 내용을 form 에서 확인하고 form 의 내용을 수정하여 시트의 반영할 수 있습니다.';
  const menuIndex = 8;

  const sheetOptions = {
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
        Name: 'sPrice'
      },
      {
        Header: '부서',
        Type: 'Text',
        RelWidth: 1,
        Name: 'sDepart'
      }
    ],
    Events: {}
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '70%',
    options: sheetOptions,
    data: data
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

export default Form;
