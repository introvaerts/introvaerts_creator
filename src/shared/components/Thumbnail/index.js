import { ImageContainer, Image } from './Styles';

const Thumbnail = ({ src, handleClick, altText }) => {
  return (
    <ImageContainer>
      <Image src={src} onClick={handleClick} altText={altText} />
    </ImageContainer>
  );
};

export default Thumbnail;
