import { LogoContainer, LogoSpan } from './Styles';

const Logo = () => {
  const handleClick = () => {
    window.location.href = `/dashboard/content`;
  }
  return (
    <LogoContainer onClick={handleClick}>
      <h4>introv</h4>
      <LogoSpan>Ærts</LogoSpan>
    </LogoContainer>
  );
};

export default Logo;
