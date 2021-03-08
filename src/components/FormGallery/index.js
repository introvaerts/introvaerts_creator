import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import GalleryRow from '../../shared/components/GalleryRow';
import { GalleryFormContainer } from './Styles';
// import SectionContainer from '../../shared/components/SectionContainer';
import Button from '../../shared/components/Button';
import FormRow from '../../shared/components/FormRow';

const FormGallery = () => {
  const [userInput, setUserInput] = useState({
    galleryName: '',
  });
  const [galleries, setGalleries] = useState([
    { _id: 1, name: 'paintings' },
    { _id: 2, name: 'photographs' },
  ]);

  const sendCredentialsToServer = async () => {
    const { galleryName } = userInput;
    if (galleryName) {
      const response = await Api.createGallery(galleryName);
      // TODO: Errorhandling
      console.log(response);
      console.log(
        `Your Gallery "${response.data.gallery.name}" was created successfully`
      );
    } else console.log('Please fill in the form.');
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendCredentialsToServer();
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
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
          value={userInput.galleryName}
          handleChange={handleUserInput}
        />
        <Button type="submit" text="Submit" />
      </form>
      {galleries ? (
        galleries.map(gallery => {
          return <GalleryRow key={gallery._id} galleryName={gallery.name} />;
        })
      ) : (
        <div>
          <b>no gallery</b>
        </div>
      )}
    </GalleryFormContainer>
  );
};

export default FormGallery;
