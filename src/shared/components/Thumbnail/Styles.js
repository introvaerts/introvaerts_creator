import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  display: grid;
  &:hover {
    opacity: 0.8;
  }
  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
`;
