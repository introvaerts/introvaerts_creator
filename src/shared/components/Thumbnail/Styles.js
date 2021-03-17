import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  ${'' /* grid-area: 1 / 1 / 2 / 2; */}
`;
