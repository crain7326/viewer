# viewer

### 초기 세팅
1. npx craete-react-app viewer
2. npm i react-router-dom
3. npm i tailwindcss

### 기본 규칙
1. 개발은 develop branch에서만 진행
2. 각자 개발 페이지 js파일 외에 변경 X
3. component는 hooks방식으로 생성
4. useState는 최상단 component에만 생성하고, 자식 components에 전달해야 할 경우 props로 넘기기

### 폴더 구조
```
viewer
ㄴnode_modules (github push X)
ㄴpublic
  ㄴindex.html
  ㄴfavicon.png (미정)
ㄴsrc
  ㄴcomponents
    ㄴ...
  ㄴpages
    ㄴHome.js (기본 페이지)
    ㄴRidi.js (유성)
    ㄴKakaoP.js (한비)
  ㄴApp.js
  ㄴindex.js
  ㄴroutes.js
  ㄴindex.css
```
