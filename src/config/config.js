import IBSheetLoader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibleaders.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  locales: ['en', 'ko'],
  theme: 'material',
  plugins: ['excel', 'common', 'dialog'],
  license: ''
}

// 로더 config
IBSheetLoader.config({
  registry: [ibsheetLib]
});

// 로더 이벤트
IBSheetLoader.once('loaded', (evt) => {
  const target = evt.target;
  if (target.alias === ibsheetLib.name) {
    let IBSheet = IBSheetLoader.getIBSheetStatic();
    console.log('loaded', IBSheet);
  }
});
