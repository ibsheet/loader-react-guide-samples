/* eslint-disable */
// 기본 옵션.
import React, { useCallback } from 'react';
import Content from 'components/Content';
import { multiData1, multiData2, multiData3 } from 'data/samplesData';

const Multi = () => {
  const title = '여러 개의 시트';
  const subTitle = '여러 개의 시트를 각 컴포넌트 별로 생성할 수 있습니다.';

  const options1 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(multiData1);
      }
    }
  };
  const options2 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(multiData2);
      }
    }
  };

  const options3 = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1
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
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData(multiData3);
      }
    }
  };

  const sheet1 = {
    id: 'sheet1',
    el: 'sheetDiv1',
    height: '100%',
    width: '33%',
    options: options1
  };

  const sheet2 = {
    id: 'sheet2',
    el: 'sheetDiv2',
    height: '100%',
    width: '33%',
    options: options2
  };

  const sheet3 = {
    id: 'sheet3',
    el: 'sheetDiv3',
    height: '100%',
    width: '33%',
    options: options3
  };

  return (
    <>
      <Content title={ title } subTitle={ subTitle } sheet={ [sheet1, sheet2, sheet3] }/>
    </>
  );
}

export default Multi;
