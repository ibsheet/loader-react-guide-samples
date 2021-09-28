/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Content from 'components/Content';
import { mergeData } from 'data/samplesData';
import { createSample, removeSample } from 'modules';

const Merge = () => {
  const dispatch = useDispatch();
  const name = 'Merge';
  const title = '자동 머지 기능';
  const subTitle = '헤더, 데이터 영역의 각 셀들의 값이 같은 경우 자동으로 병합시킬 수 있습니다.';
  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
      },
      {
        Header: ['분류', '중분류'],
        Type: 'Text',
        Name: 'cls2',
        Width: 130
      },
      {
        Header: ['분류', '소분류'],
        Type: 'Text',
        Name: 'cls3',
        Width: 130
      },
      {
        Header: ['제품', '제품'],
        Type: 'Text',
        Name: 'goods',
        Width: 120,
        Format: '#,##0'
      },
      {
        Header: ['제품','가격'],
        Type: 'Text',
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(mergeData);
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
  const options2 = {
    id: 'sheet2',
    el: 'sheetDiv2',
    height: '100%',
    width: '100%',
    options: sheetOptions
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options));
    // 아래와 같은 방식으로 시트 여러개 생성가능
    // dispatch({ type: 'CREATE_SAMPLE', name, title, subTitle, options: options2});
    return () => {
      dispatch(removeSample());
    }
  }, []);

  return (
    <>
      <Content/>
    </>
  );
}

export default Merge;