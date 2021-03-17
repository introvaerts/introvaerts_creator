import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
  grid-gap: 1rem;
  width: 87vw;
  margin: 0 auto;
`;
