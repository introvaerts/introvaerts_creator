import { StyledLabel, StyledInput } from './Styles';

const FormRow = ({ forLabel, label, type, id, name, value, handleChange }) => {
  return (
    <StyledLabel for={forLabel}>
      {label}:
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      ></StyledInput>
    </StyledLabel>
  );
};
