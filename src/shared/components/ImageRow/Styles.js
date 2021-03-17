import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const RowContainer = styled.div`
  width: ${props => props.width}vw;

  margin-left: ${props => props.marginLeft}vw;

  ${
    '' /* margin: auto;
  display: flex;
  flex-direction: column;
  margin: 0 auto 3%; */
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* align-items: center; */}
  ${'' /* margin: 0 auto 3%; */}
`;

export const LabelContainer = styled.div`
  text-align: right;
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
  margin-top: 0.7rem;
  margin-bottom: 2rem;
`;

export const InputLabel = styled.label`
  position: relative;

  padding: 0.1rem 1rem;
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

  align-self: baseline;
  margin-top: ${props => props.marginTop}rem;
  margin-bottom: ${props => props.marginBottom}rem;
  margin-left: ${props => props.marginLeft}rem;

  align-self: normal;
  text-align: center;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px ${colour.primary};
  opacity: 0;
`;
