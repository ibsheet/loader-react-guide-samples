## 👋IBSheet React Samples

### 사용기술

👉 `@ibsheet/loader: 1.1.11`
👉 `Javascript, React, Redux, Material-UI, BootStrap, SweetAlert2, FortAwesome, React-Icons`

### ✨설치방법

1. `clone` 을 받는다.
2. `yarn` or `npm install`
3. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다. (`^1.1.11`)
4. `public/lib` 에 `ibsheet` 라이브러리가 들어있는 `assets` 폴더를 넣어줍니다. (config 에서 파일위치는 변경할 수 있음.)
5. `yarn start` or `npm start`

### :gift_heart:메인 화면 흐름

순서: `App.js =>  Layout.js => Section.js => Navigation.js => Home.js => Content.js` 

### 🚀구조

1. `index.js`는 `index.html` 에 `App.js` 를 렌더링 시키는 역할.
1. `App.js` 는 메인 페이지입니다.
2. `Layout.js` 에는 페이지의 레이아웃 컴포넌트가 있습니다.
3. `Switch, Router` 를 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
4. `Home.js` 는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `<IBSheet8 />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
7. `Redux` 를 사용하여 전역 객체를 상태 관리 합니다. (여러개의 시트를 만들 수 있어, option 을 배열 형태로 담습니다.)
9. `SheetCreate.js (src/compoenets/SheetCreate.js)` 에서 시트 생성 공통 모듈이 있습니다.
10. `samples` 폴더에 각 샘플에서 사용하는 `Config` 와 기능 컴포넌트, `data`를 제공합니다.
