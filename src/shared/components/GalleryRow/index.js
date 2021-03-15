import { Link } from 'react-router-dom';
import Button from '../Button';
import {
  RowContainer,
  Row,
  LongRow,
  FlexContainer,
  GalleryName,
  StyledLabel,
  StyledInput,
  StyledTitle,
} from './Styles';

import ErrorDisplay from '../ErrorDisplay';

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
  handleClick,
  sectionTitle,
  galleries,
  galleryName,
  errorMessage,
}) => {
  return (
    <RowContainer width={width}>
      <LongRow>
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
        <Button
          text="+ Gallery"
          marginLeft="3"
          handleClick={handleClick}
          fontSize="0.8"
        />
      </LongRow>
      {errorMessage ? <ErrorDisplay errorMessage={errorMessage} /> : null}

      {galleries
        ? galleries.map((gallery, i) => (
            <StyledTitle key={i}>
              <Link to={`galleries/${gallery}`}>
                <h2>{gallery}</h2>
              </Link>
            </StyledTitle>
          ))
        : null}
    </RowContainer>
  );
};

export default GalleryRow;
