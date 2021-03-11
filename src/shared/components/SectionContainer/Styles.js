import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledSectionContainer = styled.div`
  ${props =>
    props.border == 'yes'
      ? `border: solid 1px ${colour.background2}; border-bottom: none`
      : null};
  width: ${props => props.width}%;
  margin: ${props => props.margin};
  padding: ${props => props.padding}rem;
`;
