import { PreviewContainer, StyledImage } from './Styles';

const ImagePreview = ({ id, src, maxWidth, left }) => {
  return (
    <>
      <PreviewContainer maxWidth={maxWidth} left={left}>
        <StyledImage id={id} src={src}></StyledImage>
      </PreviewContainer>
    </>
  );
};

export default ImagePreview;
