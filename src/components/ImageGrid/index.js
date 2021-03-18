import { StyledGrid, ConfirmationContainer } from './Styles';
import Button from '../../shared/components/Button'
import Thumbnail from '../../shared/components/Thumbnail';

export const ImageGrid = ({ images, handleDelete, handleDisplay, confirm }) => {
  return (
    <>
      <ConfirmationContainer display={handleDisplay} confirm={confirm}>
          <p>
            Do you really want to delete this image and its corresponding data?
          </p>
          <Button
            fontSize="0.5"
            text="cancel"
            marginTop="1"
            value={"no"}
            handleClick={(e) => {confirm(e.target.value)}}
          />
          <Button
            fontSize="0.5"
            text="ok"
            marginTop="1"
            marginLeft="1"
            value={"yes"}
            handleClick={(e) => {confirm(e.target.value)}}
          />
        </ConfirmationContainer>
      <StyledGrid>
        {/* map the array of images from this gallery */}
        {images.map((image, i) => (
          <Thumbnail
            key={i}
            src={image.image_url}
            handleDelete={handleDelete}
            id={image._id}
          />
        ))}
      </StyledGrid>
    </>
  );
};

export default ImageGrid;
