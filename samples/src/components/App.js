// Main.
import Layout from 'components/Layout';
import IBSheetLoader from '@ibsheet/loader';

const App = () => {

  // 로더 config
  IBSheetLoader.config({
    registry: [
      {
        name: 'ibsheet',
        baseUrl: './lib/assets', // ibsheet 라이브러리 위치
        locales: ['en','ko'],
        plugins: [
          'dialog',
          'common',
          'excel',
        ]
      }
    ]
  });

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
