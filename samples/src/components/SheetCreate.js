/* eslint-disable */
// IBSheet를 태그 형태로 제공합니다. CreateSheet.
import React, { useEffect } from 'react';
import loader from '@ibsheet/loader'

const IBSheet8 = (props) => {
  const id = props.id || 'sheet';
  const el = props.el || 'sheetDiv';
  const options = props.options || {};
  const basicStyle = {
    width: props.width || '100%',
    height: 'calc(100vh - 300px)'
  }
  const elStyle = {
    width: '100%',
    height: props.height || basicStyle.height,
  }

  useEffect(() => {
    loader.createSheet({
      id: id,
      el: el,
      options: options
    })
    .then(function(sheet) {
      // 시트 객체가 만들어졌는지 확인.
      // 여기서 객체가 만들어졌다고, 시트가 그려진것은 아님.
      console.log('createSheet', sheet.id);
    });
    return () => {
      loader.removeSheet(id);
    }
  }, []);

  return (
    <>
      <div style={ basicStyle }>
        <div id={ el } style={ elStyle }></div>
      </div>
    </>
  );
}

export default IBSheet8;
