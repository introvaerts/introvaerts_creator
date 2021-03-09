import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

export const StyledSectionContainer = styled.div`
  width: 100%;
  border: solid 1px ${colour.background2}
    ${'' /* width: ${props => props.width}rem; */};
`;
