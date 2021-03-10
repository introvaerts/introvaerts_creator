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

export const StyledLabel = styled.label`
  color: ${colour.secondary};
  background: none;
  ${font.label};
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 1%;
`;

export const StyledInput = styled.input`
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px ${colour.background2};
  ${'' /* margin-left: 5%; */}
`;
