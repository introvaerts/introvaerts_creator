import { StyledButton } from './Styles';

const Button = ({ type, handleClick, text }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
