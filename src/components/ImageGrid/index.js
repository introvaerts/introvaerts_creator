import { StyledGrid } from './Styles';
import Thumbnail from '../../shared/components/Thumbnail';

export const ImageGrid = ({ images }) => {
  return (
    <StyledGrid>
      {/* map the array of images from this gallery */}
      {images.map((image, i) => (
        <Thumbnail key={i} src={image} />
      ))}
    </StyledGrid>
  );
};

export default ImageGrid;
