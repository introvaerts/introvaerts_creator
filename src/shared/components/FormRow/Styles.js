import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const StyledLabel = styled.label`
  color: ${colour.secondary};
  background: none;
  ${font.label};
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border-bottom: solid 1px ${colour.background2};
`;
