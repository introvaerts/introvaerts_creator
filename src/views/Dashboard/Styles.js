import styled from 'styled-components';
import { colour } from '../../shared/styles/StyleConstants';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  width: 97.5%;
  display: flex;
  justify-content: space-between;
  ${'' /* margin-bottom: 12vh; */}
  background: ${colour.background1};
  position: fixed;
  padding-top: 1rem;
  top: 0rem;
  left: 1rem;
`;

export const MenuBox = styled.div`
  display: flex;
  width: 60vw;
`;

export const LinkBox = styled.div`
  border-left: solid 1px ${colour.background2};
  padding-left: 1rem;
  padding-top: 3.7rem;
  margin-left: 7rem;
  min-height: 3rem;
  min-width: 6rem;
  background: ${colour.background1};
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
  margin-left: 7rem;
  position: absolute;
  top: 4.5rem;
  background: ${colour.background1};
`;

export const SignOutBlock = styled.div`
      margin-left: 25%;
}
`;

export const LoggedInUser = styled.p`
  margin-top: 15%;
`;

export const Offset = styled.div`
  padding-top: 25vh;
`;

export const Visit = styled.a`
  color: ${colour.accent};
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    color: ${colour.primary}
  }
`
