# Loader-React-Guide-Samples 👋

## Guide sample using loader and ibsheet-react, react

## 📖 구조

1. `index.js`는 `index.html` 에 `App.js` 를 렌더링 시키는 역할.
2. `App.js` 는 메인 페이지입니다.
3. `Layout.js` 에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `Switch, Router` 를 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
5. `Home.js` 는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `<IBSheet8 />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
7. `Redux` 를 사용하여 전역 객체를 상태 관리 합니다. (여러개의 시트를 만들 수 있어, option 을 배열 형태로 담습니다.)
8. `SheetCreate.js (src/compoenets/Create/SheetCreate.js)` 에서 시트 생성 공통 모듈이 있습니다.
9. `samples` 폴더에 각 샘플에서 사용하는 `Config` 와 기능 컴포넌트, `data`를 제공합니다.

### :gift_heart:메인 화면 흐름

순서: `App.js =>  Layout.js => Section.js => Navigation.js => Home.js => Content.js`

### 사용기술

👉 `@ibsheet/loader: 1.1.25` <br/>
👉 `@ibsheet/react: 1.0.1` <br/>
👉 `Javascript, React, Redux, Material-UI, BootStrap, SweetAlert2, React-Icons`

### ✨설치방법

1. `clone` 을 받는다.
2. 해당 프로젝트는 `yarn berry` 를 기준으로 만들어졌습니다. `yarn` 을 최신 버전으로 설치해줍니다. `npm install --global yarn`
3. `yarn` 을 하여 패키지 모듈을 설치해줍니다.
4. `public/lib` 에 `ibsheet` 라이브러리가 들어있는 `assets` 폴더를 넣어줍니다. (`config/config.js` 에서 파일위치는 변경할 수 있음.)
5. `yarn build` // build 파일 생성됨.
6. `yarn start` // 실행
