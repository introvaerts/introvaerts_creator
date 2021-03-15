import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const StyledButton = styled.button`
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
  font-size: 1rem;
  font-size: ${props => props.fontSize}rem;

  align-self: baseline;
  margin-top: ${props => props.marginTop}rem;
  margin-bottom: ${props => props.marginBottom}rem;
  margin-left: ${props => props.marginLeft}rem; ;
`;
