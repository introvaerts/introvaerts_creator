import { StyledButton } from './Styles';

const Button = ({ type, handleClick, text, id, value }) => {
  return (
    <StyledButton type={type} onClick={handleClick} id={id} value={value}>
      {text}
    </StyledButton>
  );
};

export default Button;
