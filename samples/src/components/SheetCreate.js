/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect, useRef } from 'react';
import loader from '@ibsheet/loader';
import { useDispatch, useSelector } from 'react-redux';
import { createSheet } from 'modules';

const IBSheet8 = () => {
  const options = useSelector(state => state.options);
  const data = useSelector(state => state.data);
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
  }

  useEffect(() => {
    if (options.length > 0) {
      options.map((val, index) => {
        loader.createSheet({
          id: val.id,
          el: val.el,
          options: val.options,
          // data: data
        })
        .then((sheet) => {
          // 시트 객체가 만들어졌는지 확인.
          // 여기서 객체가 만들어졌다고, 시트가 그려진것은 아님.
          console.log('createSheet', sheet.id, sheet.Index);
          dispatch(createSheet(sheet));
        });
      });
    }
    return () => {
      options.map((val, index) => {
        loader.removeSheet(val.id);
      });
    }
  }, [options]);

  return (
    <>
      { options.length > 0 &&
        options.map((val, index) => {
          return (
            <div style={ basicStyle(val.width) }>
              <div id={ val.el } style={ elStyle(val.height) }></div>
            </div>
          )
        })
      }
    </>
  );
}

export default IBSheet8;
