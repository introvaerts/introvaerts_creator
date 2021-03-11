import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const RowContainer = styled.div`
  width: ${props => props.width}vw;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3%;
`;
///check here above!

export const StyledTitle = styled.div`
  margin: 0 auto 2rem;
`;

export const StyledLabel = styled.label`
  color: ${colour.secondary};
  background: none;
  ${font.label};
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px ${colour.background2};
`;
