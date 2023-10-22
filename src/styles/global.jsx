import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  } 

  @font-face {
    font-family: StratosSkyeng;
    font-style: normal;
    font-weight: 400;
    src:
        local('StratosSkyeng'),
        url('/fonts/StratosSkyeng.woff2') format('woff2'),
        url('/fonts/StratosSkyeng.woff') format('woff');
  }

  html,
  body {
    color: #fff;
    font-family: StratosSkyeng, sans-serif;
    height: 100%;
    width: 100%;
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
  }  
  a,
  a:visited {
    cursor: pointer;
    text-decoration: none;
  }
  
  button,
  ._btn {
    cursor: pointer;
  }
  ul li {
  list-style: none;
}

._btn-text:hover {
  border-color: #d9b6ff;
  color: #d9b6ff;
  cursor: pointer;
}

._btn-icon:hover svg {
  cursor: pointer;
  fill: transparent;
  stroke: #acacac;
}

._btn-text:active {
  border-color: #ad61ff;
  color: #ad61ff;
  cursor: pointer;
}

._btn-icon:active svg {
  cursor: pointer;
  fill: transparent;
  stroke: #fff;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  cursor: pointer;
  fill: #696969;
  stroke: #ffff;
}

`;
