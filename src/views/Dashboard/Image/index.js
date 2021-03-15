// Import react stuff
import { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

// Import Api
import Api from '../../../shared/utils/api';

// Import styled components
import Button from '../../../shared/components/Button';
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import FormRowArea from '../../../shared/components/FormRowArea';

const Image = () => {
  const { name } = useParams();
  const [imageFields, setImageFields] = useState({});

  useEffect(() => {
    Api.getGalleryByName(name).then(response =>
      setImageFields({ gallery_id: response.data.gallery._id })
    );
  }, [name]);

  const handleUserInput = e => {
    const { name, value } = e.target;
    setImageFields(imageField => ({
      ...imageField,
      [name]: value,
    }));
  };

  const onSelectFile = (key, e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (key === 'image') {
          document.getElementById('image').src = reader.result;
        }
      });
      reader.readAsDataURL(e.target.files[0]);
      setImageFields({ ...imageFields, image: e.target.files[0] });
    }
  };

  const appendFormData = () => {
    const formData = new FormData();
    Object.entries(imageFields).forEach(field => {
      formData.append(field[0], field[1]);
    });
    return formData;
  };

  const uploadToS3 = async () => {
    const response = await Api.uploadImage(appendFormData());
    if (response.code === 201)
      window.location.href = `/dashboard/galleries/${name}`;
  };

  return (
    <SectionContainer borderBottom="yes" padding="2" align="center">
      <FormRow
        width="25"
        htmlFor="title"
        label="Title"
        type="text"
        id="title"
        name="title"
        required={false}
        handleChange={handleUserInput}
      />
      <FormRow
        width="25"
        htmlFor="year"
        label="Year"
        type="number"
        id="year"
        name="year"
        required={false}
        handleChange={handleUserInput}
      />
      <FormRow
        width="25"
        htmlFor="media"
        label="Media"
        type="text"
        id="media"
        name="media"
        required={false}
        handleChange={handleUserInput}
      />
      <FormRow
        width="25"
        htmlFor="dimensions"
        label="Dimensions"
        type="text"
        id="dimensions"
        name="dimensions"
        required={false}
        handleChange={handleUserInput}
      />
      <FormRowArea
        width="25"
        htmlFor="description"
        label="Description"
        type="text"
        id="description"
        name="description"
        required={false}
        handleChange={handleUserInput}
      />
      <FormRow
        label="Upload Image"
        width="25"
        accept="image/*"
        name="image"
        type="file"
        handleChange={e => onSelectFile('image', e)}
      />
      <div style={{ overflow: 'hidden' }}>
        {' '}
        <img id="image" src="" />{' '}
      </div>
      <Button
        type="submit"
        text="Upload"
        placeholder="upload"
        handleClick={uploadToS3}
      />
    </SectionContainer>
  );
};

export default Image;
