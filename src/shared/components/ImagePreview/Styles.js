import styled from 'styled-components';

export const PreviewContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => props.left}%;
  max-width: ${props => props.maxWidth}vw;
  max-height: 80%;
  width: 15vw;
  height: 15vw;
`;

export const StyledImage = styled.img`
  ${'' /* width: 100%;
  height: auto; */}
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;
