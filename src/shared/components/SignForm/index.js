import {
  RowContainer,
  Row,
  StyledLabel,
  StyledInput,
  StyledTitle,
} from './Styles';

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
  width,
  sectionTitle,
}) => {
  return (
    <RowContainer width={width}>
      <Row>
        {sectionTitle ? <StyledTitle>{sectionTitle}</StyledTitle> : null}

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
    </RowContainer>
  );
};

export default FormRow;