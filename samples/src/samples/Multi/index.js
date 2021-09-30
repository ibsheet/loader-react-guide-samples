/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/View/Content';
import { multiData1, multiData2, multiData3 } from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';

const Multi = () => {
  const dispatch = useDispatch();
  const name = 'Multi';
  const title = '여러 개의 시트';
  const subTitle = '여러 개의 시트를 각 컴포넌트 별로 생성할 수 있습니다. onRenderFirstFinishAll 이벤트 에서 마지막에 생성된 시트 객체를 알 수 있습니다.';

  const sheetOptions1 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      {
        Header: '상품',
        Type: 'Text',
        Name: 'goods',
        Width: 80,
        CanEdit: 0
      }
    ],
    Cols: [
      {
        Header: '1월',
        Type: 'Int',
        Name: 'jan',
        Width: 70
      },
      {
        Header: '2월',
        Type: 'Int',
        Name: 'feb',
        Width: 70
      },
      {
        Header: '3월',
        Type: 'Int',
        Name: 'mar',
        Width: 70
      },
      {
        Header: '4월',
        Type: 'Int',
        Name: 'apr',
        Width: 70
      },
    ],
    Events: {}
  };
  const sheetOptions2 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      {
        Header: '상품',
        Type: 'Text',
        Name: 'goods',
        Width: 80,
        CanEdit: 0
      }
    ],
    Cols: [
      {
        Header: '5월',
        Type: 'Int',
        Name: 'may',
        Width: 70
      },
      {
        Header: '6월',
        Type: 'Int',
        Name: 'jun',
        Width: 70
      },
      {
        Header: '7월',
        Type: 'Int',
        Name: 'jul',
        Width: 70
      },
      {
        Header: '8월',
        Type: 'Int',
        Name: 'aug',
        Width: 70
      }
    ],
    Events: {}
  };

  const sheetOptions3 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    LeftCols: [
      {
        Header: '상품',
        Type: 'Text',
        Name: 'goods',
        Width: 80,
        CanEdit: 0
      }
    ],
    Cols: [
      {
        Header: '9월',
        Type: 'Int',
        Name: 'sep',
        Width: 70
      },
      {
        Header: '10월',
        Type: 'Int',
        Name: 'oct',
        Width: 70
      },
      {
        Header: '11월',
        Type: 'Int',
        Name: 'nov',
        Width: 70
      },
      {
        Header: '12월',
        Type: 'Int',
        Name: 'dec',
        Width: 70
      }
    ],
    Events: {}
  };

  const options1 = {
    id: 'sheet1',
    el: 'sheetDiv1',
    height: '100%',
    width: '33%',
    options: sheetOptions1,
    data: multiData1
  };

  const options2 = {
    id: 'sheet2',
    el: 'sheetDiv2',
    height: '100%',
    width: '33%',
    options: sheetOptions2,
    data: multiData2
  };

  const options3 = {
    id: 'sheet3',
    el: 'sheetDiv3',
    height: '100%',
    width: '33%',
    options: sheetOptions3,
    data: multiData3
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options1));
    dispatch(createSample(name, title, subTitle, options2));
    dispatch(createSample(name, title, subTitle, options3));
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

export default Multi;
