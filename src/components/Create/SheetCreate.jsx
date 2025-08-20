/* eslint-disable */
import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addSheetId } from '../../reducer';
import { IBSheetReact } from '@ibsheet/react';

// NOTE: propsEqual 은 현재 구조상 필요 없어 제거 (memo 이미 적용)
const IBSheet8Inner = () => {
  const name     = useSelector(state => state.name);
  const options  = useSelector(state => state.options, shallowEqual); // 배열 또는 단일?
  const visible  = useSelector(state => state.visible);
  const dispatch = useDispatch();

  const sheetRef  = useRef(null);
  const sheetRefs = useRef({});
  const boundRef  = useRef(new Set());

  const isMulti = Array.isArray(options) && options.length > 1;
  const sheetItems = isMulti ? options : (Array.isArray(options) ? options : [options]);

  const bindEventsIfNeeded = useCallback((sheetName, sheet) => {
    if (!sheet || boundRef.current.has(sheet.id)) return;

    switch (sheetName) {
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
      case 'MasterDetail': {
        const events = {
            onBeforeDataLoad: evt => {
            let message = '';
            const importance = evt.sheet.SuppressMessage + 1;
            switch (evt.result) {
              case -1: message = 'URL 을 다시 한 번 확인해주세요.'; break;
              case -3: message = '100이하, 400이상의 상태코드 입니다.'; break;
              case -5: message = 'api 폴더에서 서버를 실행시켜주세요. (node app.js)'; break;
              case -6: message = '연결 시간 초과 되었습니다.'; break;
              case -7: message = '잘못된 데이터 형식 입니다.'; break;
              default: return;
            }
            evt.sheet.showMessage(message, importance, 1);
          },
          onDataLoad: () => {},
          onSearchFinish: () => {}
        };
        Object.assign(sheet.options.Events, events);
        boundRef.current.add(sheet.id);
        break;
      }
      default:
        break;
    }
  }, []);

  const onInstance = useCallback((sheet) => {
    if (!sheet) return;

    // 이벤트 바인딩 & ID 등록
    bindEventsIfNeeded(name, sheet);
    dispatch(addSheetId(sheet.id));

    // 초기 데이터/기능 처리
    if (name !== 'DataLoad') {
      if (sheet.SearchMode === 0) {
        let dataArr = [];
        // MasterDetail 의 디테일 시트면 비워두기
        if (name === 'MasterDetail' && sheet.id === sheetRefs.current['sheet2']?.id) {
          dataArr = [];
        } else if (sheet.getDataRows().length > 0) {
          dataArr = sheet.getSaveJson(0).data;
        }
        if (dataArr.length) sheet.loadSearchData(dataArr);

        if (name === 'MasterDetail') {
          const sheet1 = sheetRefs.current['sheet1'];
          const sheet2 = sheetRefs.current['sheet2'];
          if (sheet1 && sheet2) {
            sheet1.bind('onFocus', evt => {
              if (evt.row !== evt.orow) {
                const sigun = evt.row.sSiGunGu;
                const data2 = options[1].data[0];
                switch (sigun) {
                  case '관악구': sheet2.loadSearchData(data2.gwanak); break;
                  case '광진구': sheet2.loadSearchData(data2.gwangjin); break;
                  case '금천구': sheet2.loadSearchData(data2.geumcheon); break;
                  case '동작구': sheet2.loadSearchData(data2.dongjak); break;
                  case '서초구': sheet2.loadSearchData(data2.seocho); break;
                  case '송파구': sheet2.loadSearchData(data2.songpa); break;
                  default: break;
                }
              }
            });
          }
        }
      } else if (sheet.SearchMode === 3) {
        const param = {
          url: location.href.indexOf('localhost') > -1
            ? 'http://localhost:8000/api/data'
            : 'https://api.ibsheet.com/ibsheet/v8/samples/customer/paging.jsp',
          method: location.href.indexOf('localhost') > -1 ? 'GET' : 'POST',
          param: 'data=100&total=20000&searchMode=' + sheet.SearchMode,
          callback: rtn => {
            try {
              const rtnData = JSON.parse(rtn.data);
              sheet.showMessageTime(
                `<span style='color:black'>조회가 완료되었습니다.<br> 서버모듈 전체 데이터 건수 : ${rtnData.Total}</span>`,
                1500
              );
            } catch (e) {
              // 파싱 실패 → 필요 시 로깅
            }
          }
        };
        sheet.doSearchPaging(param);
      }
    }
  }, [bindEventsIfNeeded, name, dispatch, options]);

  if (!visible) return null;

  return (
    <>
      {sheetItems.map(s => (
        <IBSheetReact
          key={s.id}
          ref={el => {
            if (el) {
              sheetRefs.current[s.id] = el;
              if (!sheetRef.current) sheetRef.current = el; // 첫번째 참조
            } else {
              delete sheetRefs.current[s.id];
            }
          }}
          options={s.options}
          data={s.data}
          style={{ width: s.width || '100%', height: s.height || '100%', minHeight: '800px' }}
          instance={onInstance}
        />
      ))}
    </>
  );
};

const IBSheet8 = React.memo(IBSheet8Inner);
export default IBSheet8;