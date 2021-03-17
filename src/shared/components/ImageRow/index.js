import {
  RowContainer,
  Row,
  StyledLabel,
  StyledInput,
  StyledTitle,
  InputLabel,
} from './Styles';

import ErrorDisplay from '../ErrorDisplay';

const ImageRow = ({
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
  errorMessage,
  marginLeft,
}) => {
  return (
    <RowContainer width={width} marginLeft={marginLeft}>
      <Row>
        {sectionTitle ? <StyledTitle>{sectionTitle}</StyledTitle> : null}
        <InputLabel>
          Browse
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
        </InputLabel>
        <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
        {errorMessage ? <ErrorDisplay errorMessage={errorMessage} /> : null}
      </Row>
    </RowContainer>
  );
};

export default ImageRow;
