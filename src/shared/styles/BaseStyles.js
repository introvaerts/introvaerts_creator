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

   h2 {
     ${font.regular};
     ${font.size(1)};
    
   }

  h3 {
      ${font.regular};
      ${font.size(0.875)};
       margin-bottom: 0.6rem;
   }
h4 {
  
      ${font.brand};
      ${font.size(1.4)};
      color: ${colour.accent};
      display: inline;
  }

   p {
     ${font.regular};
      ${font.size(0.7)}
   }
   a {
     color: ${colour.primary};
     &:hover {
         color: ${colour.accent};
         }
     text-decoration: none;    
         
     }

  `;
