import { StyledButton } from './Styles';

const Button = ({
  type,
  handleClick,
  text,
  id,
  value,
  marginTop,
  marginLeft,
  marginBottom,
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
      marginBottom={marginBottom}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
