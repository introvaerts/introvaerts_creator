import {
  RowContainer,
  Row,
  LabelContainer,
  StyledLabel,
  StyledInput,
  StyledTitle,
} from './Styles';

import ErrorDisplay from '../ErrorDisplay';

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
  errorMessage,
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
        {errorMessage ? <ErrorDisplay errorMessage={errorMessage} /> : null}
      </Row>
    </RowContainer>
  );
};

export default FormRow;
