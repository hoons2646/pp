import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    *,
    html,
    body {
      font-size: 10px;
      font-family: Pretendard -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      box-sizing: border-box;
    }
`;
