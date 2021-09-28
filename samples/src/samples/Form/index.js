/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/Content';
import { formData as data } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'modules';

const Form = () => {
  const dispatch = useDispatch();
  const name = 'Form';
  const title = 'Form 요소를 이용한 상세보기';
  const subTitle = '시트와 form 간의 연동을 통해 행 선택시 내용을 form 에서 상세하게 볼 수 있습니다.';

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
    width: '70%',
    options: sheetOptions
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options, data));
    return () => {
      console.log('Remove Merge Samples')
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
