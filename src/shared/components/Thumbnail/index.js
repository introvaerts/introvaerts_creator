import Icon from '../Icon';
import { ImageContainer, Image, ConfirmationContainer } from './Styles';
import Button from '../Button';
import { useEffect } from 'react';

const Thumbnail = ({
  src,
  handleClick,
  altText,
  handleDelete,
  id,
  confirmDelete,
  cancelDelete,
  handleDisplay,
  index,
}) => {


  console.log(handleDisplay)
  return (
    <ImageContainer>
      <Image
        className="image"
        src={src}
        onClick={handleClick}
        altText={altText}
      />
      <Icon handleClick={handleDelete} id={id} index={index} />
      {/* receive the result of the handleDelete */}
      <ConfirmationContainer id={id} display={handleDisplay[index]}>
        <p>
          Do you really want to delete this image and its corresponding data?
        </p>
        <Button
          fontSize="0.5"
          text="cancel"
          marginTop="1"
          handleClick={cancelDelete}
        />
        <Button
          fontSize="0.5"
          text="ok"
          marginTop="1"
          marginLeft="1"
          handleClick={confirmDelete}
        />
      </ConfirmationContainer>
    </ImageContainer>
  );
};

export default Thumbnail;
