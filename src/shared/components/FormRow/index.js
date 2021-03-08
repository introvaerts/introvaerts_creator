import { Row, StyledLabel, StyledInput } from './Styles';

const FormRow = ({
  htmlFor,
  label,
  type,
  id,
  name,
  placeholder,
  value,
  pattern,
  title,
  handleChange,
}) => {
  return (
    <Row>
      <StyledLabel htmlFor={htmlFor}>
        {label}
        <StyledInput
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          pattern={pattern}
          title={title}
          onChange={handleChange}
          required
        ></StyledInput>
      </StyledLabel>
    </Row>
  );
};

export default FormRow;
