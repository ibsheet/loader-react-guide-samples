## 👋IBSheet React Samples

### 사용기술

👉 `Javascript, React, JSX, Redux, Material-UI, BootStrap, SweetAlert2, FortAwesome, React-Icons`

### ✨설치방법

1. `clone` 을 받는다.
2. `yarn` or `npm install`
3. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다.
4. `public/lib` 에 `ibsheet` 라이브러리가 들어있는 `assets` 폴더를 넣어줍니다. (config 에서 파일위치는 변경할 수 있음.)
5. `yarn start` or `npm start`

### 🚀폴더구조

1. `App.js` 는 메인 페이지입니다.
2. `<IBSheet8 />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
3. `Redux` 를 사용하여 전역 객체를 상태 관리 합니다. (여러개의 시트를 만들 수 있어, option 을 배열 형태로 담습니다.)
4. `SheetCreate.js` 에서 시트 생성 공통 모듈이 있습니다.
5. `samples` 폴더에 각 샘플에 시트 컴포넌트를 제공합니다.
