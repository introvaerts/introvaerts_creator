import { ImageContainer, Image } from './Styles';

const SingleImage = ({ src, handleClick, altText }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={handleClick} altText={altText} />
    </ImageContainer>
  );
};

export default SingleImage;
