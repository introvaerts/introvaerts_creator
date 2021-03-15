import { Link, useParams } from 'react-router-dom';
import ImageGrid from '../../../components/ImageGrid';

// call API and get images of this galleryId and pass them to ImageGrid
const images = [
  'https://picsum.photos/300/200',
  'https://picsum.photos/200/140',
  'https://picsum.photos/100/30',
  'https://picsum.photos/200/400',
];

const Gallery = () => {
  const { name } = useParams();
  return (
    <div>
      Gallery: {name}
      <Link to={`/dashboard/galleries/${name}/image-upload`}>Add image</Link>
      <ImageGrid images={images} />
    </div>
  );
};

export default Gallery;
