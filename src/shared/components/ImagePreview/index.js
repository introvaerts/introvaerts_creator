import { PreviewContainer, StyledImage } from './Styles';

const ImagePreview = ({ id, src, maxWidth, left, width, height }) => {
  return (
    <>
      <PreviewContainer
        maxWidth={maxWidth}
        left={left}
        width={width}
        height={height}
      >
        <StyledImage id={id} src={src}></StyledImage>
      </PreviewContainer>
    </>
  );
};

export default ImagePreview;
