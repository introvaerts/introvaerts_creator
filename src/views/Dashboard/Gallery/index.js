import { Link, useParams } from 'react-router-dom';

const Gallery = () => {
  const { name } = useParams();
  return (
    <div>
      Gallery: {name}
      <Link to={`/dashboard/galleries/${name}/image-upload`}>Add image</Link>
    </div>
  );
};

export default Gallery;
