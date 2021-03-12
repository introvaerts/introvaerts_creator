import { useState } from 'react';
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';
import Api from '../../../shared/utils/api';

const Gallery = () => {
  const [imageKey, setImageKey] = useState('');

  const onSelectFile = (key, e) => {
    if (e.target.files && e.target.files.length > 0) {
      /* const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (key === 'image') {
          document.getElementById('image').src = reader.result;
        }
        setImageKey(reader.result);
      }); */
      /* reader.readAsDataURL(e.target.files[0]); */
      setImageKey(e.target.files[0]);
    }
  };

  const uploadToS3 = () => {
    let formData = new FormData();
    console.log(formData);
    formData.append('image', imageKey);
    console.log({ image: formData.getAll('image')[0] });
    Api.uploadImage({ image: formData.getAll('image')[0] });
  };

  console.log(imageKey);
  return (
    <>
      <div>
        <input
          accept="image/*"
          name="image"
          type="file"
          onChange={e => onSelectFile('image', e)}
        />
        <div style={{ overflow: 'hidden' }}>
          {' '}
          <img id="image" src="" />{' '}
        </div>
        <button placeholder="upload" onClick={uploadToS3}>
          {' '}
          Upload{' '}
        </button>
      </div>
      <form id="form" method="POST" onSubmit={uploadToS3}>
        {/* HEADER */}
        <SectionContainer border="yes" padding="2">
          <h2>uploadImage</h2>
          <FormRow
            accept="image/*"
            width="25"
            htmlFor="image"
            label="image"
            type="file"
            id="bla"
            name="image"
            required={true}
            onChange={e => onSelectFile('image', e)}
          />
        </SectionContainer>
        <SectionContainer borderBottom="yes" padding="2" align="center">
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Gallery;
