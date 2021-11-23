/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { useDispatch, useSelector } from 'react-redux';
import { createSheet } from 'reducer';

const IBSheet8 = () => {
  const name = useSelector(state => state.name);
  const options = useSelector(state => state.options);
  const dispatch = useDispatch();

  const basicStyle = (width) => {
    return {
      width: width || '100%',
      height: '70vh'
    }
  };
  const elStyle = (height) => {
    return {
      width: '100%',
      height: height || 'inherit',
    }
  };

  useEffect(() => {
    if (options.length > 0) {
      options.map(sheet => {
        eventBinding(name, sheet);
        loader.createSheet({
          id: sheet.id,
          el: sheet.el,
          options: sheet.options
        })
        .then((sheet) => {
          // 시트 객체 생성, 시트 렌더링 x
          dispatch(createSheet(sheet));
        });
      });
    }
    return () => {
      options.map(sheet => {
        loader.removeSheet(sheet.id);
      });
    }
  }, [options]);

  // 이벤트 바인딩
  const eventBinding = (name, sheet) => {
    switch(name) {
      case 'Type':
      case 'Formula':
      case 'Merge':
      case 'Tree':
      case 'SubSum':
      case 'Multi':
      case 'Dialog':
      case 'DataLoad':
      case 'Form':
      case 'MasterDetail':
        sheet.options.Events = {
          onRenderFirstFinish: evt => {
            if (name !== 'DataLoad') {
              const data = (name === 'MasterDetail' && sheet.id === 'sheet2') ? [] : sheet.data;
              if (data.length) evt.sheet.loadSearchData(data);
              if (name === 'MasterDetail' && sheet.id === 'sheet2') {
                sheet1.bind('onFocus', sheet1Evt => {
                  if (sheet1Evt.row !== sheet1Evt.orow) {
                    const sigun = sheet1Evt.row.sSiGunGu;
                    const data = sheet.data[0];

                    switch (sigun) {
                      case '관악구':
                        sheet2.loadSearchData(data.gwanak);
                        break;
                      case '광진구':
                        sheet2.loadSearchData(data.gwangjin);
                        break;
                      case '금천구':
                        sheet2.loadSearchData(data.geumcheon);
                        break;
                      case '동작구':
                        sheet2.loadSearchData(data.dongjak);
                        break;
                      case '서초구':
                        sheet2.loadSearchData(data.seocho);
                        break;
                      case '송파구':
                        sheet2.loadSearchData(data.songpa);
                        break;
                      default:
                        break;
                    }
                  }
                });
              }
            }
          },
          onDataLoad: evt => {},
          onSearchFinish: evt => {}
        }
        return sheet;
    }
  };

  return (
    <>
      { options.length > 0 &&
        options.map((sheet, index) => {
          return (
            <div style={ basicStyle(sheet.width) } key={ sheet.id }>
              <div id={ sheet.el } style={ elStyle(sheet.height) } key={ index }></div>
            </div>
          )
        })
      }
    </>
  );
}

export default IBSheet8;
