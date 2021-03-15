import { StyledError } from './Styles';

const ErrorDisplay = ({ errorMessage }) => {
  return (
    <StyledError>
      {' '}
      <h3>{errorMessage}</h3>{' '}
    </StyledError>
  );
};

export default ErrorDisplay;
