// Import react stuff
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import Api
import Api from '../../../shared/utils/api';

// Import styled components
import Button from '../../../shared/components/Button';
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import ImageRow from '../../../shared/components/ImageRow';
import FormRowArea from '../../../shared/components/FormRowArea';
import ImagePreview from '../../../shared/components/ImagePreview';
import Loading from '../../../shared/components/Loading';

const Image = () => {
  const { id } = useParams();
  const [imageFields, setImageFields] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Api.getGalleryById(id).then(response =>
      setImageFields({ gallery_id: response.data.gallery._id })
    );
  }, [id]);

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
    setLoading(true);
    const response = await Api.uploadImage(appendFormData());
    if (response.code === 201)
      window.location.href = `/dashboard/galleries/${id}`;
  };

  return (
    <>
      {!loading ? (
        <>
          <SectionContainer border="yes" padding="2">
            <h2>Caption</h2>
            <FormRow
              width="25"
              marginLeft="55"
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
              marginLeft="55"
              htmlFor="year"
              label="Year"
              type="text"
              id="year"
              name="year"
              required={false}
              handleChange={handleUserInput}
            />
            <FormRow
              width="25"
              marginLeft="55"
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
              marginLeft="55"
              htmlFor="dimensions"
              label="Dimensions"
              type="text"
              id="dimensions"
              name="dimensions"
              required={false}
              handleChange={handleUserInput}
            />
            <FormRow
              width="25"
              marginLeft="55"
              htmlFor="alt_text"
              label="Alt Text"
              type="text"
              id="alt_text"
              name="alt_text"
              required={false}
              handleChange={handleUserInput}
            />
            <FormRowArea
              width="25"
              marginLeft="55"
              htmlFor="description"
              label="Description"
              type="text"
              id="description"
              name="description"
              required={false}
              handleChange={handleUserInput}
            />
            <ImageRow
              width="25"
              marginLeft="55"
              align="center"
              label="Upload Image"
              accept="image/*"
              name="image"
              type="file"
              handleChange={e => onSelectFile('image', e)}
            />
            {imageFields.image ? (
              <ImagePreview id="image" src="" maxWidth="25" left="15" />
            ) : null}
          </SectionContainer>
          <SectionContainer borderBottom="yes" padding="2" align="center">
            <Button
              type="submit"
              text="Upload"
              placeholder="upload"
              handleClick={uploadToS3}
            />
          </SectionContainer>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Image;
