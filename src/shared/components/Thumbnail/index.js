import Icon from '../Icon';
import { ImageContainer, Image } from './Styles';

const Thumbnail = ({
  src,
  altText,
  handleDelete,
  id,
}) => {

  return (
    <ImageContainer>
      <Image
        className="image"
        src={src}
        altText={altText}
      />
      <Icon handleClick={handleDelete} id={id} />
      {/* receive the result of the handleDelete */}
    </ImageContainer>
  );
};

export default Thumbnail;
