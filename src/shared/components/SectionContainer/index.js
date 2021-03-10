import { StyledSectionContainer } from './Styles';

const SectionContainer = ({ children, width, border, margin }) => {
  return (
    <StyledSectionContainer
      children={children}
      width={width}
      border={border}
      margin={margin}
    />
  );
};

export default SectionContainer;
