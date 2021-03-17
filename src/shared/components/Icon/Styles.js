import styled from 'styled-components';
import { ImageContainer } from '../Thumbnail/Styles'

export const IconContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: -1;
  cursor: pointer;
  &:hover {
    filter: invert(17%) sepia(72%) saturate(7500%) hue-rotate(359deg)
      brightness(99%) contrast(121%);
  }

  ${ImageContainer}:hover & {
    z-index: 10;
  }
`;
