import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledSectionContainer = styled.div`
  ${props =>
    props.border === 'yes'
      ? `border: solid 1px ${colour.background2}; border-bottom: none`
      : null};
  ${props =>
    props.borderBottom === 'yes'
      ? `border: solid 1px ${colour.background2}`
      : null};
  width: ${props => props.width}%;
  margin: ${props => props.margin};
  padding: ${props => props.padding}rem;
  text-align: ${props => props.align};
  position: relative;
  z-index: 0;
`;
