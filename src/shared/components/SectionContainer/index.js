import { StyledSectionContainer } from './Styles';

const SectionContainer = ({
  children,
  width,
  border,
  margin,
  padding,
  align,
  borderBottom,
}) => {
  return (
    <StyledSectionContainer
      children={children}
      width={width}
      border={border}
      margin={margin}
      padding={padding}
      align={align}
      borderBottom={borderBottom}
    />
  );
};

export default SectionContainer;
