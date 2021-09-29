/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect, useRef } from 'react';
import loader from '@ibsheet/loader';
import { useDispatch, useSelector } from 'react-redux';
import { createSheet } from 'modules';

const IBSheet8 = () => {
  const name = useSelector(state => state.name);
  const options = useSelector(state => state.options);
  const dispatch = useDispatch();

  const basicStyle = ({ width }) => {
    return {
      width: width || '100%',
      height: 'calc(100vh - 300px)'
    }
  }
  const elStyle = ({ height }) => {
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
          console.log('createSheet', sheet.id);
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
      case 'Form':
        sheet.options.Events.onRenderFirstFinish = evt => {
          evt.sheet.loadSearchData(sheet.data);
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
