import styled from 'styled-components';

import { font, colour } from '../../styles/StyleConstants';

export const SmallWrapper = styled.div`
  margin-top: ${props => props.marginTop}%;
  margin-left: ${props => props.marginLeft}%;
`;

export const SmallLink = styled.span`
  ${font.label};
  ${font.size(0.875)};
  color: ${colour.accent};
  &:hover {
    color: ${colour.primary};
  }
`;
