import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import GalleryRow from '../../shared/components/GalleryRow';
import { GalleryFormContainer } from './Styles';
// import SectionContainer from '../../shared/components/SectionContainer';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';

const FormGallery = () => {
  const [galleries, setGalleries] = useState([]);

  const saveGalleries = async () => {
    console.log(galleries);
    if (galleries) {
      console.log('galleries');
    } else console.log('Please fill in the form.');
  };

  const handleSubmit = e => {
    e.preventDefault();
    saveGalleries();
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setGalleries(galleries => ({
      ...galleries,
      [name]: value,
    }));
    console.log(galleries);
  };

  return (
    <GalleryFormContainer>
      <h3>FormGallery</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <FormRow
          htmlFor="galleryName"
          label="Gallery Name"
          type="text"
          id="galleryName"
          name="galleryName"
          value={galleries.galleryName || ''}
          handleChange={handleUserInput}
        />
        <Button type="submit" text="Submit" />
      </form>
      {console.log(galleries)}
      {/*       {galleries ? (
        galleries.map((gallery, i) => {
          return <GalleryRow key={i} galleryName={gallery.galleryName} />;
        })
      ) : (
        <div>
          <b>no gallery</b>
        </div>
      )} */}
    </GalleryFormContainer>
  );
};

export default FormGallery;
