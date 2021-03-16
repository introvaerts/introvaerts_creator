import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { font, colour } from '../../../shared/styles/StyleConstants';

export const StyledButton = styled(Link)`
  padding: 0.3rem 1rem;
  border-radius: 0;
  border: solid 1px ${colour.secondary};
  color: ${colour.accent};
  &:hover {
    color: ${colour.reverse};
  }
  background: none;
  &:hover {
    background: ${colour.accent};
  }
  ${font.label};
  text-transform: uppercase;
  ${font.size(0.8)};
  font-size: ${props => props.fontSize}rem;

  align-self: baseline;
  margin-left: 2rem;

  ${
    '' /* margin-top: ${props => props.marginTop}rem;
  margin-bottom: ${props => props.marginBottom}rem;
  margin-left: ${props => props.marginLeft}rem; ; */
  }
`;

export const GalleryBox = styled.div`
  display: flex;
  margin-top: -7vh;
  margin-bottom: 12vh;
`;
