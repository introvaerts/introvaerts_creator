import styled from 'styled-components';

export const PreviewContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.left}%;
  max-width: ${props => props.maxWidth}vw;
  max-height: 80%;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
