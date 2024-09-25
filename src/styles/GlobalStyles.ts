// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    
    
  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
      src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    src: url('/src/assets/fonts/PretendardVariable.woff2') format('woff');
  }

  body {
    margin: 0;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: "Pretendard", source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* 393px보다 화면이 작은 경우 */
  @media screen and (max-width: 393px) {
    body {
      width: 100%; /* 화면 너비에 맞춤 */
      margin: 0 auto;
    }
  }

  /* 393px보다 화면이 큰 경우 */
  @media screen and (min-width: 393px) {
    body {
      width: 393px; /* 화면 너비를 393px로 고정 */
      margin: 0 auto; /* 화면 중앙에 위치 */
    }
  }

  :root {
    --gray--0: #F4F4F4;
    --gray--1: #EDEDED;
    --gray--2: #E3E3E3;
    --gray--3: #9B9B9B;
    --gray--4: #575757;
    --gray--5: #979797;  
    --black: #000000;
    --main: #89CEFA;
    --sky--blue: #E3ECF2;
    --kakao: #FFDD00;
    //민주 추가 색상
    --white: #fff;
    --blue: #89CEFA;
  }
`;
