const GalleryRow = props => {
  console.log(props);
  return (
    <div>
      <h4>GalleryRow</h4>
      <div>{props.galleryName}</div>
    </div>
  );
};

export default GalleryRow;
