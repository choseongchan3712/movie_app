# Work list

- [x] Router 설정
- [x] 각 폴더, 파일등 구성
- [x] api 설정
- [x] Loading, Header, Footer 글로벌 콤포넌트 구성
- [x] 웹 폰트 설정
- [x] 각 페이지 UI 작업 및 반응형
- [x] Helmet
- [x] Header Scroll Event
- [] Deploy

# 설치항목

- [x] npm i react-router-dom
- [x] npm install node-fetch@2
- [x] npm i styled-components
- [x] npm i styled-reset
- [x] npm i react-spinners
- [x] swiper
- [x] font-awesome
- [x] npm i react-hook-form
- [x] helmet-async
- [] react icons

리액트 깃허브 배포

1. 설치: npm i gh-pages -D

2. package.json 코드추가

script 부분에:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

하단에:
"homepage": "https://choseongchan3712.github.io/MOVIE_APP/#/",

3. 터미널: npm run deploy

4. 깃허브 레포지토리: 상단 메뉴에 settings -> pages -> branch가 gh-pages로 변경 되었는지 확인

5. 레포지토리 메인에서 우측하단에 Depiloyments -> 앱확인