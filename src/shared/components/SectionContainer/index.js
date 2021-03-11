import { StyledSectionContainer } from './Styles';

const SectionContainer = ({ children, width, border, margin, padding }) => {
  return (
    <StyledSectionContainer
      children={children}
      width={width}
      border={border}
      margin={margin}
      padding={padding}
    />
  );
};

export default SectionContainer;
