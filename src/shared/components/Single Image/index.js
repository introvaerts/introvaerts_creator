import { ImageContainer, Image } from './Styles';

const SingleImage = ({ src, handleClick, altText, width }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={handleClick} altText={altText} width={width} />
    </ImageContainer>
  );
};

export default SingleImage;
