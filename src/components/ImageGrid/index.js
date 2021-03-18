import { StyledGrid } from './Styles';
import Thumbnail from '../../shared/components/Thumbnail';

export const ImageGrid = ({ images, handleDelete, display }) => {
  return (
    <StyledGrid>
      {/* map the array of images from this gallery */}
      {images.map((image, i) => (
        <Thumbnail
          key={i}
          src={image.image_url}
          handleDelete={handleDelete}
          id={image._id}
          display={display}
        />
      ))}
    </StyledGrid>
  );
};

export default ImageGrid;
