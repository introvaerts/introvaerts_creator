import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 30vw;
  height: 30vw;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
