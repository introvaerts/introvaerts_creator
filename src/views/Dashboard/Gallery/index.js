import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageGrid from '../../../components/ImageGrid';
import Api from '../../../shared/utils/api';

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
    <div>
      Gallery: {data ? data.gallery.name : null}
      <Link to={`/dashboard/galleries/${id}/image-upload`}>Add image</Link>
      <ImageGrid images={data ? data.images : []} />
    </div>
  );
};

export default Gallery;
