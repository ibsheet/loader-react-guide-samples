/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';
import { treeData } from 'data/samplesData';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'modules';

const Tree = () => {
  const dispatch = useDispatch();
  const name = 'Tree';
  const title = '트리 예제';
  const subTitle = '트리 관련 예제 입니다.';
  const data = treeData;

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      HeaderMerge: 3,
      CustomScroll: 1,
      MainCol: 'Sol'
    },
    LeftCols: [
      {
        Type: 'Int',
        Width: 50,
        Align: 'Center',
        Name: 'SEQ'
      }
    ],
    Cols: [
      {
        Header: '솔루션 팀',
        Type: 'Text',
        Name: 'Sol',
        MinWidth: '200',
        Align: 'Left',
        RelWidth: 1,
      },
      {
        Header: '2021/1',
        Type: 'Int',
        Name: 'Y202101',
        Width: '80',
        Align: 'Right',
        FormulaRow: 'Sum',
        RelWidth: 1,
        CanEdit: 0
      },
      {
        Header: '2021/2',
        Type: 'Int',
        Name: 'Y202102',
        Width: '80',
        Align: 'Right',
        FormulaRow: 'Sum',
        RelWidth: 1,
        CanEdit: 0
      },
      {
        Header: '2021/3',
        Type: 'Int',
        Name: 'Y202103',
        Width: '80',
        Align: 'Right',
        FormulaRow: 'Sum',
        RelWidth: 1,
        CanEdit: 0
      },
      {
        Header: '2021/4',
        Type: 'Int',
        Name: 'Y202104',
        Width: '80',
        Align: 'Right',
        FormulaRow: 'Sum',
        RelWidth: 1,
        CanEdit: 0
      },
      {
        Header: '2021/5',
        Type: 'Int',
        Name: 'Y202105',
        Width: '80',
        Align: 'Right',
        FormulaRow: 'Sum',
        RelWidth: 1,
        CanEdit: 0
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

export default Tree;