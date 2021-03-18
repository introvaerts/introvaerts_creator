import { StyledSectionContainer } from './Styles';

const SectionContainer = ({
  children,
  width,
  border,
  margin,
  padding,
  align,
  borderBottom,
  id,
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
      id={id}
    />
  );
};

export default SectionContainer;
