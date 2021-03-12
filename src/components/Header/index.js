import Logo from '../Logo';
import { MenuContainer, MenuItem } from './Styles';

export const Menu = () => {
  return (
    <MenuContainer>
      <Logo />
      <MenuItem>
        <h2>
          a tool for creative people to show work in a uncomplicated and
          appealing way
        </h2>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
