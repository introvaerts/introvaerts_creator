import styled from 'styled-components';

import { font, colour } from '../../styles/StyleConstants';

export const SmallWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 6rem;
`;

export const SmallLink = styled.span`
  ${font.label};
  ${font.size(0.875)};
  color: ${colour.accent};
  &:hover {
    color: ${colour.primary};
  }
`;
