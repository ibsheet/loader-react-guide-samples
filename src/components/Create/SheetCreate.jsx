/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSheetId } from '../../reducer';
import { IBSheetReact } from '@ibsheet/react';

const IBSheet8 = () => {
  const mounted = useRef(false);
  const name = useSelector(state => state.name);
  const options = useSelector(state => state.options);
  const dispatch = useDispatch();

  const visible = useSelector(state => state.visible);

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

  const sheetRef = useRef(null);
  const sheetRefs = useRef({});

  const onInstance = useCallback(
    (sheet) => {
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
        if (name !== 'DataLoad') {
          if (sheet.SearchMode === 0) {
            let data = [];
            if (name == 'MasterDetail' && sheet.id == sheetRefs.current['sheet2']?.id) {
              data = [];
            } else {
              if (sheet.getDataRows().length > 0) {
                data = sheet.getSaveJson(0).data;
              }
            }
            if (data.length) sheet.loadSearchData(data);
            if (name === 'MasterDetail' && sheetRefs.current['sheet2']?.id) {
                sheetRefs.current['sheet1'].bind('onFocus', sheet1Evt => {
                if (sheet1Evt.row !== sheet1Evt.orow) {
                  const sigun = sheet1Evt.row.sSiGunGu;
                  const data = options[1].data[0];

                  switch (sigun) {
                    case '관악구':
                      sheetRefs.current['sheet2'].loadSearchData(data.gwanak);
                      break;
                    case '광진구':
                      sheetRefs.current['sheet2'].loadSearchData(data.gwangjin);
                      break;
                    case '금천구':
                      sheetRefs.current['sheet2'].loadSearchData(data.geumcheon);
                      break;
                    case '동작구':
                      sheetRefs.current['sheet2'].loadSearchData(data.dongjak);
                      break;
                    case '서초구':
                      sheetRefs.current['sheet2'].loadSearchData(data.seocho);
                      break;
                    case '송파구':
                      sheetRefs.current['sheet2'].loadSearchData(data.songpa);
                      break;
                    default:
                      break;
                  }
                }
              });
            }
          } else if (sheet.SearchMode === 3) {
            const param = {
              url: location.href.indexOf('localhost') > -1 ? 'http://localhost:8000/api/data' : 'https://api.ibsheet.com/ibsheet/v8/samples/customer/paging.jsp',
              method: location.href.indexOf('localhost') > -1 ? 'GET' : 'POST',
              // 카운팅 할 data 의 갯수와 전체 갯수를 param 으로 해서 보내도록 합니다.
              param: 'data=100&total=20000&searchMode=' + sheet.SearchMode,
              callback: rtn => {
                const rtnData = JSON.parse(rtn.data);
                sheet.showMessageTime('<span style=\'color:black\'>조회가 완료되었습니다.<br> 서버모듈 전체 데이터 건수 : ' + rtnData.Total + '</span>', 1500);
              }
            };

            sheet.doSearchPaging(param);
          }
        }
      default: break;
    }
  });

  useEffect(() => {
    const checkRef = () => {
      if (options.length === 1 && sheetRef.current) {
        eventBinding(name, sheetRef.current);
        dispatch(addSheetId(sheetRef.current.id));
      } else if (options.length > 1) {
        const ready = options.every(sheet => sheetRefs.current[sheet.id]);
        if (ready) {
          options.forEach(sheet => {
            const sheetInstance = sheetRefs.current[sheet.id];
            eventBinding(name, sheetInstance);
            dispatch(addSheetId(sheetInstance.id));
          });
        } else {
          setTimeout(checkRef, 100);
        }
      }
    };

    checkRef();
  }, [visible, options.length]);

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

  if (options.length == 1) {
    return (
      <>
        { options.length > 0 &&
          options.map((sheet, index) => {
            return (
              <IBSheetReact
                key={sheet.id}
                ref={sheetRef}
                options={sheet.options}
                data={sheet.data}
                style={elStyle(sheet.width)}
                instance={onInstance}
              />
            )
          })
        }
      </>
    );
  } else {
    return visible ? (
      <>
        {options.map((sheet, index) => (
          <IBSheetReact
            key={sheet.id}
            ref={(el) => {
              if (el) {
                sheetRefs.current[sheet.id] = el;
              } else {
                delete sheetRefs.current[sheet.id]; // 제거된 시트 정리
              }
            }}
            options={sheet.options}
            data={sheet.data}
            style={elStyle(sheet.width)}
            instance={onInstance}
          />
        ))}
      </>
    ) : null;
  }
}

export default IBSheet8;
