/* eslint-disable */
// 기본 옵션.
import React, { useState, useEffect } from 'react';
import Content from 'components/Content';

const Format = () => {
  const title = '포맷 예제';
  const subTitle = '포맷 관련 예제 입니다.';

  const options = {
    Cfg: {
      SearchMode: 2,
      HeaderMerge: 3
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
        Header: [
          '회사명',
          '회사명'
        ],
        Type: 'Text',
        Name: 'sCorp',
        Width: '100',
        Align: 'Center',
        CanEdit: 1
      },
      {
        Header: [
          '사원수',
          '사원수'
        ],
        Type: 'Int',
        Name: 'sPerson',
        Width: '80',
        Align: 'Right',
        CanEdit: 1
      },
      {
        Header: [
          '금년신입',
          '금년신입'
        ],
        Type: 'Int',
        Name: 'sNewPerson',
        Width: '70',
        Align: 'Right',
        CanEdit: 1
      },
      {
        Header: [
          '평균연봉',
          '평균연봉'
        ],
        Type: 'Float',
        Name: 'sPay',
        Width: '100',
        Align: 'Right',
        CanEdit: 1
      },
      {
        Header: [
          '평균보너스',
          '평균보너스'
        ],
        Type: 'Float',
        Name: 'sBonus',
        Width: '100',
        Align: 'Right',
        CanEdit: 1
      },
      {
        Header: [
          '전년매출',
          '전년매출'
        ],
        Type: 'Int',
        Name: 'sPreYear',
        Width: '80',
        Align: 'Right',
        CanEdit: 1,
        Format: '#,### 만원'
      },
      {
        Header: [
          '금년매출',
          '금년매출'
        ],
        Type: 'Float',
        Name: 'sYear',
        Width: '80',
        Align: 'Right',
        CanEdit: 1
      },
      {
        Header: [
          '전년대비\n 증감율',
          '전년대비\n 증감율'
        ],
        Type: 'Float',
        Name: 'sGrow',
        Width: '100',
        Align: 'Right',
        CanEdit: 1,
        Format: '#,##0.##\\%'
      },
      {
        Header: [
          '내년기대\n 증감율',
          '내년기대\n 증감율'
        ],
        Type: 'Float',
        Name: 'sPreGrow',
        Width: '100',
        Align: 'Right',
        CanEdit: 1,
        Format: '#,##0.##%'
      },
      {
        Header: [
          '년월일',
          'Ymd'
        ],
        Name: 'sDate_Ymd',
        Width: 110
      },
      {
        Header: [
          '년월일',
          'Ym'
        ],
        Name: 'sDate_Ym',
        Width: 90
      },
      {
        Header: [
          '년월일',
          'Md'
        ],
        Name: 'sDate_Md',
        Width: 90
      },
      {
        Header: [
          '시분초',
          'Hms'
        ],
        Name: 'sDate_Hms',
        Width: 80
      },
      {
        Header: [
          '시분초',
          'Hm'
        ],
        Name: 'sDate_Hm',
        Width: 70
      },
      {
        Header: [
          '년월일시분초',
          'YmdHms'
        ],
        Name: 'sDate_YmdHms',
        Width: 160
      },
      {
        Header: [
          '년월일시분초',
          'YmdHm'
        ],
        Name: 'sDate_YmdHm',
        Width: 160
      },
      {
        Header: [
          '년월일(한국)',
          'yyyy.MM.dd'
        ],
        Name: 'sDate_yyyyMMdd',
        Type: 'Date',
        Format: 'yyyy.MM.dd',
        EditFormat: 'yyyyMMdd',
        Size: 8
      },
      {
        Header: [
          '년월일(한국)',
          'yyyy-MM'
        ],
        Name: 'sDate_yyyyMM',
        Type: 'Date',
        Width: 110,
        Format: 'yyyy-MM',
        EditFormat: 'yyyyMM',
        DataFormat: 'yyyyMM',
        Size: 6
      },
      {
        Header: [
          '월일년(미국)',
          'MM-dd-yyyy'
        ],
        Name: 'sDate_MMddyyyy',
        Width: 120
      },
      {
        Header: [
          '일월년(유럽)',
          'dd-MM-yyyy'
        ],
        Name: 'sDate_ddMMyyyy',
        Width: 120
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
      <Content title={ title } subTitle={ subTitle } options={ options }/>
    </>
  );
}

export default Format;
