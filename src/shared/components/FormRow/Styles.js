import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: end; */}
  ${'' /* width: 90%; */}
  margin: 0 auto 3%;
  ${'' /* text-align: end; */}
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
