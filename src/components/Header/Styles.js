import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 18vh;
`;

export const MenuItem = styled.div`
  border-left: solid 1px ${colour.background2};
  padding-left: 1%;
  padding-top: 3.6rem;
  margin-left: 6%;
  min-height: 3%;
`;
