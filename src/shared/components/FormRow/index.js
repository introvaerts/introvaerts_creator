import {
  RowContainer,
  Row,
  StyledLabel,
  StyledInput,
  StyledTitle,
} from './Styles';

const FormRow = ({
  accept,
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
      <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
      <Row>
        {sectionTitle ? <StyledTitle>{sectionTitle}</StyledTitle> : null}

        <StyledInput
          accept={accept}
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
      </Row>
    </RowContainer>
  );
};

export default FormRow;
