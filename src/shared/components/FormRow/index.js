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
  required,
}) => {
  return (
    <Row>
      <StyledInput
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        title={title}
        onChange={handleChange}
        required={required}
      ></StyledInput>
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
    </Row>
  );
};

export default FormRow;
