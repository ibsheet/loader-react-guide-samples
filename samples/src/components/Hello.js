/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import IBSheet8 from './SheetCreate';

const Hello = () => {
  const options = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      {
        Header: [
          '신청인',
          '신청인'
        ],
        Type: 'Text',
        Name: 'sName',
      },
      {
        Header: [
          '선택',
          '선택'
        ],
        Type: 'Bool',
        Name: 'check',
      },
      {
        Header: [
          '신청사유',
          '신청사유'
        ],
        Type: 'Enum',
        Name: 'Reason',
        ColMerge: 0,
        Enum: '|야근|주말특근|휴일특근',
        EnumKeys: '|01|02|03'
      },
      {
        Header: [
          '신청금액',
          '신청금액'
        ],
        Type: 'Int',
        Name: 'Qty',
      }
    ],
    Events: {
      onRenderFirstFinish: (evt) => {
        // 시트가 처음 그려지면 발생하는 이벤트로 여기서 첫 데이터 로드를 할 수 있음.
        evt.sheet.loadSearchData([{},{}]);
      }
    }
  };

  return (
    <>
      <IBSheet8 id="sheet" el="sheetDiv" width="700px" height="500px" options={ options } />
    </>
  );
}

export default Hello;
