import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';


export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
  grid-gap: 1rem;
  width: 87vw;
  margin: 0 auto;
`;

export const ConfirmationContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 25%;
  width: 50%;
  padding: 2rem 0.5rem;
  z-index: 15;
  tranform: translateY(-50%);
  background: ${colour.background1};
  text-align: center;
  border: solid 1px ${colour.background2};
  display: ${props => props.display};
`;