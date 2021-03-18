import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Api from '../../../shared/utils/api';

import ImageGrid from '../../../components/ImageGrid';
import { StyledButton, GalleryBox } from './Styles';

// call API and get images of this galleryId and pass them to ImageGrid
const Gallery = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [imageDelete, setImageDelete] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await Api.getGalleryById(id);
      setData(response.data);
    };
    fetchImages();
  }, [imageDelete]);

  const confirmDelete = showConfirmDelete => {
    if (showConfirmDelete) {
      return 'block';
    } else {
      return 'none';
    }
  };

  const deleteImage = async imageId => {
    setShowConfirmDelete(true);
    confirmDelete(showConfirmDelete);
    /*     const really = window.confirm(
      'Do you really want to delete this image and its corresponding data?'
    );
    if (really) {
      await Api.deleteImageById(imageId);
      setImageDelete(Date.now());
    } */
    /* if (confirmDelete === 'none') {
      setConfirmDelete('block');
      console.log('delete image');
    } else setConfirmDelete('none'); */
  };

  return (
    <>
      <GalleryBox>
        <h1>{data ? data.gallery.name : null}</h1>
        <StyledButton to={`/dashboard/galleries/${id}/image-upload`}>
          Add image
        </StyledButton>
      </GalleryBox>
      <ImageGrid
        handleDisplay={confirmDelete}
        images={data ? data.images : []}
        handleDelete={deleteImage}
      />
    </>
  );
};

export default Gallery;
