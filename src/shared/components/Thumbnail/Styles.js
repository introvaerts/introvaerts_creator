import styled from 'styled-components';
import { colour } from '../../styles/StyleConstants';

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

export const ConfirmationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  width: 50%;
  padding: 1rem;
  tranform: translateY(-50%);
  background: ${colour.background1};
  text-align: center;
  display: ${props => props.display};
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  grid-area: 1 / 1 / 2 / 2;
`;
