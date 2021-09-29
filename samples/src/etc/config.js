import IBSheetLoader from '@ibsheet/loader';

const sheetjs = 'ibsheet';
// ibsheet 라이브러리 위치, '<publicpath>/ibsheet'
const url = 'https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/';
const locales = ['en','ko'];
const theme = 'material';
const plugins = ['dialog', 'common', 'excel'];

// 로더 config
IBSheetLoader.config({
  registry: [
    {
      name: sheetjs,
      baseUrl: url,
      locales: locales,
      theme: theme,
      plugins: plugins
    }
  ]
});

// 로더 이벤트
IBSheetLoader.once('loaded', (evt) => {
  const target = evt.target;
  if (target.alias === sheetjs) {
    let IBSheet = IBSheetLoader.getIBSheetStatic();
    console.log('loaded', IBSheet);
  }
});
