/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { useDispatch, useSelector } from 'react-redux';
import { createSheet } from 'reducer';

const IBSheet8 = () => {
  const state = useSelector(state => state);
  const name = state.name;
  const options = state.options;
  const dispatch = useDispatch();

  const basicStyle = width => {
    return {
      width: width || '100%',
      height: '70vh'
    }
  };
  const elStyle = height => {
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
        .then(sheet => {
          // 시트 객체 생성, 시트 렌더링 x
          dispatch(createSheet(sheet));
        })
        .catch(err => {
          console.log('Failed to create sheet', err);
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
      case 'Merge':
      case 'Tree':
      case 'DataLoad':
      case 'SubSum':
      case 'Formula':
      case 'MultiRecord':
      case 'ServerScrollPaging':
      case 'Form':
      case 'Multi':
      case 'Dialog':
      case 'MasterDetail':
        const events = {
          onRenderFirstFinish: evt => {
            if (name !== 'DataLoad') {
              if (evt.sheet.SearchMode === 0) {
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
              } else if (evt.sheet.SearchMode === 3) {
                const param = {
                  url: 'http://localhost:8000/api/data',
                  // 카운팅 할 data 의 갯수와 전체 갯수를 param 으로 해서 보내도록 합니다.
                  param: 'data=100&total=20000&searchMode=' + evt.sheet.SearchMode,
                  callback: rtn => {
                    const rtnData = JSON.parse(rtn.data);
                    evt.sheet.showMessageTime('<span style=\'color:black\'>조회가 완료되었습니다.<br> 서버모듈 전체 데이터 건수 : ' + rtnData.Total + '</span>', 1500);
                  }
                };

                evt.sheet.doSearchPaging(param);
              }
            }
          },
          onBeforeDataLoad: evt => {
            let message = '';
            const importance = evt.sheet.SuppressMessage + 1;
            switch(evt.result) {
              case -1:
                message = 'URL 을 다시 한 번 확인해주세요.';
                break;
              case -3:
                message = '100이하, 400이상의 상태코드 입니다.';
                break;
              case -5:
                message = 'api 폴더에서 서버를 실행시켜주세요. (명령어: node app.js)';
                break;
              case -6:
                message = '연결 시간 초과 되었습니다.';
                break;
              case -7:
                message = '잘못된 데이터 형식 입니다.';
                break;
              default:
                return;
            }
            evt.sheet.showMessage(message, importance, 1);
          },
          onDataLoad: evt => {},
          onSearchFinish: evt => {}
        }
        Object.assign(sheet.options.Events, events);
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
