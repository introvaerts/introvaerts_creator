import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Api from '../../../shared/utils/api';

import ImageGrid from '../../../components/ImageGrid';
import { StyledButton, GalleryBox } from './Styles';

// call API and get images of this galleryId and pass them to ImageGrid
const Gallery = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchImages = async () => {
      const response = await Api.getGalleryById(id);
      setData(response.data);
    };
    fetchImages();
  }, []);

  return (
    <>
      <GalleryBox>
        <h1>{data ? data.gallery.name : null}</h1>

        <StyledButton to={`/dashboard/galleries/${id}/image-upload`}>
          Add image
        </StyledButton>
      </GalleryBox>
      <ImageGrid images={data ? data.images : []} />
    </>
  );
};

export default Gallery;
