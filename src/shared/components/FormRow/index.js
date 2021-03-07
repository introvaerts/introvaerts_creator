import { Row, StyledLabel, StyledInput } from './Styles';

const FormRow = ({ htmlFor, label, type, id, name, value, handleChange }) => {
  return (
    <Row>
      <StyledLabel htmlFor={htmlFor}>
        {label}
        <StyledInput
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
        ></StyledInput>
      </StyledLabel>
    </Row>
  );
};

export default FormRow;
