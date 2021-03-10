import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${'' /* grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr)); */}
  grid-gap: 1rem;
  grid-auto-flow: dense;
`;
