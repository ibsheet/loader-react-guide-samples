## 👋IBSheet React Samples

### :gift_heart:메인 화면 흐름

순서: `App.js =>  Layout.js => Section.js => Navigation.js => Home.js => Content.js`

### 🚀구조

1. `index.js`는 `index.html` 에 `App.js` 를 렌더링 시키는 역할.
2. `App.js` 는 메인 페이지입니다.
3. `Layout.js` 에는 페이지의 레이아웃 컴포넌트가 있습니다.
4. `Switch, Router` 를 통해 라우팅을 구현하여, 각 샘플 페이지를 URL을 통해 렌더링합니다.
5. `Home.js` 는 메인 페이지에서 보여지는 컴포넌트를 가지고 있습니다.
6. `<IBSheet8 />` 컴포넌트는 `Content` 컴포넌트에서 사용합니다.
7. `Redux` 를 사용하여 전역 객체를 상태 관리 합니다. (여러개의 시트를 만들 수 있어, option 을 배열 형태로 담습니다.)
8. `SheetCreate.js (src/compoenets/Create/SheetCreate.js)` 에서 시트 생성 공통 모듈이 있습니다.
9. `samples` 폴더에 각 샘플에서 사용하는 `Config` 와 기능 컴포넌트, `data`를 제공합니다.
