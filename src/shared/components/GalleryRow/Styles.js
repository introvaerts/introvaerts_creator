import styled from 'styled-components';
import { colour, font } from '../../styles/StyleConstants.js';

export const RowContainer = styled.div`
  width: ${props => props.width}vw;
  margin-left: 33vw;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* margin: 0 auto 3%; */}
`;

export const LongRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* margin: 0 auto 3%; */}
`;

export const GalleryName = styled.div`
  margin-bottom: 1rem;
`;
///check here above!

export const StyledTitle = styled.div`
  ${'' /* margin: 0 auto 2rem; */}
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  color: ${colour.secondary};
  background: none;
  ${font.label};
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-top: 0.7rem;
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  color: ${colour.primary};
  background: none;
  ${font.regular};
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px ${colour.primary};
`;
