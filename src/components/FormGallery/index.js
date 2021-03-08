import { useState } from 'react';
import Api from '../../shared/utils/api.js';
import GalleryRow from '../../shared/components/GalleryRow';

const FormGallery = props => {
  const [userInput, setUserInput] = useState({
    galleryName: '',
  });

  const sendCredentialsToServer = async () => {
    const { galleryName } = userInput;
    if (galleryName) {
      const response = await Api.createGallery(galleryName);
      // TODO: Errorhandling
      console.log(`${response.data.gallery.name} was created successfully`);
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
    <div>
      <h3>FormGallery</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="galleryName"
          id="galleryName"
          placeholder="galleryName"
          value={userInput.galleryName}
          title="Please put in a valid gallery name."
          required
          onChange={handleUserInput}
        />
        <input type="submit" id="submit" value="Submit" />
      </form>
      <GalleryRow galleryName={props.galleryName} />
    </div>
  );
};

export default FormGallery;
