import { StyledButton } from './Styles';

const Button = ({
  type,
  handleClick,
  text,
  id,
  value,
  marginTop,
  marginLeft,
  fontSize,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={handleClick}
      id={id}
      value={value}
      marginTop={marginTop}
      marginLeft={marginLeft}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
