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
  const [showConfirm, setShowConfirm] = useState("none");
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await Api.getGalleryById(id);
      setData(response.data);
    };
    fetchImages();
  }, [imageDelete, id]);

  const confirmDeleteBox = async () => {
    setShowConfirm(showConfirm === "none" ? "block" : "none");
  };

  const deleteImage = async (imageId) => {
    confirmDeleteBox();
    setDeleteId(imageId)
  };

  const actuallyDelete = async (value) => {
    if (value === "yes") {
      await Api.deleteImageById(deleteId);
      setImageDelete(Date.now());
      confirmDeleteBox();
    } else {
      confirmDeleteBox();
    } 
  }
  return (
    <>
      <GalleryBox>
        <h1>{data ? data.gallery.name : null}</h1>
        <StyledButton to={`/dashboard/galleries/${id}/image-upload`}>
          Add image
        </StyledButton>
      </GalleryBox>
      <ImageGrid
        handleDisplay={showConfirm}
        images={data ? data.images : []}
        handleDelete={deleteImage}
        confirm={actuallyDelete}
      />
    </>
  );
};

export default Gallery;
