import { createGlobalStyle } from 'styled-components';
import { colour, font } from './StyleConstants.js';

export default createGlobalStyle`
  html {
      font-size: 18px;
      ${font.regular}
      }
  `;
