import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10vh;
`;

export const MenuBox = styled.div`
  display: flex;
  width: 60%;
`;
export const MenuItem = styled.div`
  border-left: solid 1px ${colour.background2};
  padding-left: 1%;
  padding-top: 3.7%;
  margin-left: 10%;
  min-height: 3%;
`;

export const Dropdown = styled.div``;

export const SignOutBlock = styled.div`
      margin-left: 25%;
}
`;

export const LoggedInUser = styled.p`
  margin-top: 15%;
`;
