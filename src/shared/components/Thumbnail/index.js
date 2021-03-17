import Icon from '../Icon';
import { ImageContainer, Image } from './Styles';

const Thumbnail = ({ src, handleClick, altText, handleDelete, id }) => {
  return (
    <ImageContainer>
      <Image
        className="image"
        src={src}
        onClick={handleClick}
        altText={altText}
      />
      <Icon handleClick={handleDelete} id={id} />
    </ImageContainer>
  );
};

export default Thumbnail;
