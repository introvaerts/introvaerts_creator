import Button from '../Button';
import {
  RowContainer,
  Row,
  FlexContainer,
  LabelContainer,
  StyledLabel,
  StyledInput,
  StyledTitle,
} from './Styles';

const GalleryRow = ({
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
  galleries,
}) => {
  return (
    <RowContainer width={width}>
      <LabelContainer>
        <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
      </LabelContainer>
      <Row>
        <FlexContainer>
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
          <Button text="+ Gallery" marginLeft="3" />
        </FlexContainer>
      </Row>
      <LabelContainer>offset</LabelContainer>
      <Row>
        <StyledTitle>
          <h2>Paintings</h2>
        </StyledTitle>
      </Row>
    </RowContainer>
  );
};

export default GalleryRow;
