import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10vh;
`;

export const MenuBox = styled.div`
  display: flex;
  width: 60vw;
`;

export const LinkBox = styled.div`
  border-left: solid 1px ${colour.background2};
  padding-left: 1rem;
  padding-top: 3.7rem;
  margin-left: 10rem;
  min-height: 3rem;
`;
export const MenuItem = styled.div`
  position: relative;
`;
export const StyledLink = styled(NavLink)`
  &.active {
    color: ${colour.accent};
  }
`;

export const Dropdown = styled.div`
  border-left: solid 1px ${colour.background2};
  padding-left: 1rem;
  margin-left: 10rem;
  position: absolute;
  top: 4.5rem;
  height: 0rem;
  overflow: hidden;
`;

export const SignOutBlock = styled.div`
      margin-left: 25%;
}
`;

export const LoggedInUser = styled.p`
  margin-top: 15%;
`;
