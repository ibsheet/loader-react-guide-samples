/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { DialogData as data } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'modules';

const Dialog = () => {
  const dispatch = useDispatch();
  const name = 'Dialog';
  const title = '시트 + 다이얼로그';
  const subTitle = '다이얼로그 위에 시트를 띄웁니다.';

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(data);
      }
    }
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
    options: sheetOptions
  };

  const dialog = {
    id: 'sheetDialog',
    el: 'sheetDiaDiv',
    height: '100%',
    width: '100%',
    options: options
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, data));
    // 아래와 같은 방식으로 시트 여러개 생성가능
    // dispatch({ type: 'CREATE_SAMPLE', name, title, subTitle, options: options2});
    return () => {
      dispatch(removeSample());
    }
  }, []);

  return (
    <>
      <Content dialog={ dialog }/>
    </>
  );
}

export default Dialog;
