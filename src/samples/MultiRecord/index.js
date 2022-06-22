/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/View/Content';
import data from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';

const MultiRecord = () => {
  const dispatch = useDispatch();
  const name = 'MultiRecord';
  const title = '멀티레코드';
  const subTitle = '일반적인 데이터 그리드는 하나의 데이터가 하나의 행으로 보여지는데, 멀티 레코드는 하나의 데이터를 여러 행으로 표현해서 많은 데이터를 한 번에 제공합니다.';
  const menuIndex = 6;

  const sheetOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR',
      MultiRecord: 1
    },
    Cols: [
      // 첫번째 단위데이터행(DataRow)
      [
        {
          Header: 'No',
          Name: 'SEQ',
          Align: 'Center',
          Width: 72,
          MinWidth: 50,
          RecordRowSpan: 3
        },
        {
          Header: '도서관명',
          Type: 'Text',
          Name: 'sName',
          Align: 'Center',
          Width: 150,
          RecordRowSpan: 3
        },

        {
          Header: '시도명',
          Type: 'Text',
          Name: 'sSido',
          CanEdit: 1,
          Width: 145,
          Align: 'Center'
        },
        {
          Header: '시군구명',
          Type: 'Enum',
          Name: 'sSiGunGu',
          CanEdit: 1,
          Width: 145,
          Align: 'Center',
          Enum: '|금천구|관악구|서초구|동작구',
          EnumKeys: '|1|2|3|4'
        },

        {
          Header: '대출가능권수',
          Type: 'Int',
          Name: 'sRentNum',
          Width: 100,
          CanEdit: 1,
          Align: 'Center',
          Format: '#,### 권'
        },
        {
          Header: '대출가능일수',
          Type: 'Int',
          Name: 'sRentDay',
          Width: 100,
          CanEdit: 1,
          Align: 'Center',
          Format: '#,### 일',
          RecordColSpan: 2
        },
        { Header: '대출가능일수' },

        {
          Header: '운영기관명',
          Type: 'Text',
          Name: 'sOperation',
          CanEdit: 1,
          Width: 145,
          Align: 'Center'
        },
        {
          Header: '도서관유형',
          Type: 'Enum',
          Name: 'sType',
          CanEdit: 1,
          Width: 116,
          Align: 'Center',
          Enum: '|공공도서관|작은도서관',
          EnumKeys: '|1|2'
        },
        {
          Header: '설립날짜',
          Name: 'sFDay',
          Type: 'Date',
          Format: 'yyyy/MM/dd',
          DataFormat: 'yyyy/MM/dd',
          EditFormat: 'yyyy/MM/dd',
          CanEdit: 1,
          Width: 140,
          Align: 'Center'
        },

        {
          Header: '시작',
          Name: 'sWeekdayStart',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          RecordRowSpan: 3,
          RecordHColSpan: 6,
          RecordHColTitle: '운영시각'
        },
        {
          Header: '종료',
          Name: 'sWeekdayEnd',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          CanEdit: 1,
          RecordRowSpan: 3,
          Align: 'Center'
        },
        {
          Header: '시작',
          Name: 'sSaturdayStart',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          RecordRowSpan: 3
        },
        {
          Header: '종료',
          Name: 'sSaturdayEnd',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          RecordRowSpan: 3
        },
        {
          Header: '시작',
          Name: 'sHolidayStart',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          RecordRowSpan: 3
        },
        {
          Header: '종료',
          Name: 'sHolidayEnd',
          Type: 'Date',
          Format: 'HH:mm',
          Width: 70,
          RecordRowSpan: 3
        },
        {
          Header: '휴관일',
          Type: 'Text',
          Name: 'sClosed',
          Width: 90,
          RecordRowSpan: 3
        },

        {
          Header: '위도',
          Type: 'Float',
          Name: 'sLatitude',
          Visible: 0,
          RecordRowSpan: 3
        },
        {
          Header: '경도',
          Type: 'Float',
          Name: 'sLongitude',
          Visible: 0,
          RecordRowSpan: 3
        }
      ],

      // 두번째 단위데이터행(DataRow)
      [
        { Header: 'No' },
        { Header: '도서관명' },

        {
          Header: '소재지 도로명 주소',
          Type: 'Text',
          Name: 'sAdress',
          RecordColSpan: 2,
          RecordRowSpan: 2
        },
        { Header: '소재지 도로명 주소' },

        {
          Header: '도서',
          Type: 'Int',
          Name: 'sBook',
          Align: 'Center',
          Format: '#,##0 권',
          RecordRowSpan: 2,
          RecordHColSpan: 3,
          RecordHColTitle: '자료수'
        },
        {
          Header: '연속간행물',
          Type: 'Int',
          Name: 'sSeries',
          Align: 'Center',
          Format: '#,##0 종',
          RecordRowSpan: 2
        },
        {
          Header: '비도서',
          Type: 'Int',
          Name: 'sNonbook',
          Align: 'Center',
          Format: '#,##0 종',
          RecordRowSpan: 2
        },

        {
          Header: '건물면적',
          Type: 'Float',
          Name: 'sArea',
          CanEdit: 1,
          Width: 145,
          Align: 'Center',
          Format: '#,##0.00 ㎡'
        },
        {
          Header: '전화번호',
          Type: 'Text',
          Name: 'sPhoneN',
          CanEdit: 1,
          Align: 'Center',
          RecordColSpan: 2
        },
        { Header: '전화번호' },

        {
          Header: '시작',
          RecordRowSpan: 2,
          RecordHColSpan: 2,
          RecordHColTitle: '평일'
        },
        { Header: '종료' },
        {
          Header: '시작',
          RecordRowSpan: 2,
          RecordHColSpan: 2,
          RecordHColTitle: '토요일'
        },
        { Header: '종료' },
        {
          Header: '시작',
          RecordRowSpan: 2,
          RecordHColSpan: 2,
          RecordHColTitle: '공휴일'
        },
        { Header: '종료' },
        { Header: '휴관일' },

        { Header: '위도' },
        { Header: '경도' }
      ],

      // 세번째 단위데이터행(DataRow)
      [
        { Header: 'No' },
        { Header: '도서관명' },

        { Header: '소재지 도로명 주소' },
        { Header: '소재지 도로명 주소' },

        { Header: '도서' },
        { Header: '연속간행물' },
        { Header: '비도서' },

        {
          Header: '홈페이지 주소',
          Type: 'Link',
          Name: 'sPagelink',
          Align: 'Center',
          CanEdit: 0,
          RecordColSpan: 3
        },
        { Header: '홈페이지 주소' },
        { Header: '홈페이지 주소' },

        { Header: '시작' },
        { Header: '종료' },
        { Header: '시작' },
        { Header: '종료' },
        { Header: '시작' },
        { Header: '종료' },
        { Header: '휴관일' },

        { Header: '위도' },
        { Header: '경도' }
      ],
    ],
    Events: {}
  };

  const options = {
    id: 'sheet',
    el: 'sheetDiv',
    height: '100%',
    width: '100%',
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

export default MultiRecord;
