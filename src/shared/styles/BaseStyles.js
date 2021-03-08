import { createGlobalStyle } from 'styled-components';
import { colour, font } from './StyleConstants.js';

export default createGlobalStyle`
  html {
      font-size: 1.3vmax;
      ${font.regular};
      }

      h1 {
        ${font.regular};
        ${font.size(1.4)}
        margin-bottom: 2rem;
      }

  a {
    color: ${colour.primary};
    &:hover {
        color: ${colour.accent};
        }
    text-decoration: none;    
        
    margin: 1rem;
    }

  `;
