import styled from 'styled-components';

export const PreviewContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.left}%;
  width: ${props => props.width}vmax;
  height: ${props => props.height}vmax;
  max-width: ${props => props.maxWidth}vw;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
