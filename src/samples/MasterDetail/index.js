/* eslint-disable */
// 기본 옵션.
import React, { useEffect } from 'react';
import Content from 'components/View/Content';
import { masterData, detailData } from './data';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from 'reducer';

const MasterDetail = () => {
  const dispatch = useDispatch();
  const name = 'MasterDetail';
  const title = '마스터/디테일';
  const subTitle = '두 개의 시트를 이용하여 한 시트의 행 이동 시, 다른 시트의 데이터를 로드하는 방법을 알아봅시다.';

  const masterOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR'
    },
    Cols: [
      {
        Header: {
          Value: '시도명'
        },
        Name: 'sSido',
        Required: 1,
        RelWidth: 1,
        Type: 'Text',
        Align: 'Center'
      },
      {
        Header: {
          Value: '시군구명'
        },
        Name: 'sSiGunGu',
        Required: 1,
        RelWidth: 1,
        Type: 'Text',
        Align: 'Center'
      }
    ],
    Events: {}
  };
  const detailOptions = {
    Cfg: {
      SearchMode: 0,
      CustomScroll: 1,
      Style: 'IBMR',
      IgnoreFocused: true
    },
    Cols: [
      {
        Header: '도서관명',
        Type: 'Text',
        Name: 'sName',
        Required: 1,
        MinWidth: 150
      },
      {
        Header: '도서관유형',
        Type: 'Enum',
        Name: 'sType',
        MinWidth: 100,
        CanEdit: 1,
        Enum: '|공공도서관|작은도서관',
        EnumKeys: '|1|2'
      },
      {
        Header: '평일운영시작시각',
        Name: 'sWeekdayStart',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm'
      },
      {
        Header: '평일운영종료시각',
        Name: 'sWeekdayEnd',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm',
        CanEdit: 1
      },
      {
        Header: '토요일운영시작시각',
        Name: 'sSaturdayStart',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm'
      },
      {
        Header: '토요일운영종료시각',
        Name: 'sSaturdayEnd',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm'
      },
      {
        Header: '공휴일운영시작시각',
        Name: 'sHolidayStart',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm'
      },
      {
        Header: '공휴일운영종료시각',
        Name: 'sHolidayEnd',
        MinWidth: 100,
        Type: 'Date',
        Format: 'HH:mm'
      },
      {
        Header: '휴관일',
        Type: 'Lines',
        Name: 'sClosed',
        MinWidth: 200
      },
      {
        Header: '자료수(도서)',
        Type: 'Int',
        Name: 'sBook',
        MinWidth: 100,
        Format: '#,##0 권'
      },
      {
        Header: '자료수(연속간행물)',
        Type: 'Int',
        Name: 'sSeries',
        MinWidth: 100,
        Format: '#,##0 종'
      },
      {
        Header: '자료수(비도서)',
        Type: 'Int',
        Name: 'sNonbook',
        MinWidth: 100,
        Format: '#,##0 종'
      },
      {
        Header: '대출가능권수',
        Type: 'Int',
        Name: 'sRentNum',
        MinWidth: 50,
        CanEdit: 1,
        Format: '#,### 권'
      },
      {
        Header: '대출가능일수',
        Type: 'Int',
        Name: 'sRentDay',
        MinWidth: 50,
        CanEdit: 1,
        Format: '#,### 일'
      },
      {
        Header: '시군구명',
        Name: 'sSiGunGu',
        MinWidth: 100,
        Type: 'Text',
        Align: 'Center'
      }
    ],
    Events: {}
  };

  const options1 = {
    id: 'sheet1',
    el: 'sheetDiv1',
    height: '100%',
    width: '30%',
    options: masterOptions,
    data: masterData
  };

  const options2 = {
    id: 'sheet2',
    el: 'sheetDiv2',
    height: '100%',
    width: '69%',
    options: detailOptions,
    data: detailData
  };

  useEffect(() => {
    dispatch(createSample(name, title, subTitle, options1));
    dispatch(createSample(name, title, subTitle, options2));
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

export default MasterDetail;
