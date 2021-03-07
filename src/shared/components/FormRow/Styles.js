import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const Row = styled.div`
  display: block;
  margin: 0.7rem;
  text-align: end;
`;

export const StyledLabel = styled.label`
  color: ${colour.secondary};
  background: none;
  ${font.label};
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-right: 0.7rem;
`;

export const StyledInput = styled.input`
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px ${colour.background2};
  margin-left: 0.7rem;
`;
