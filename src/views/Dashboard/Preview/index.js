import { useEffect } from 'react';
// api
import Api from '../../../shared/utils/api';
import SectionContainer from '../../../shared/components/SectionContainer';
import Button from '../../../shared/components/Button';

import { StylediFrame } from './Styles';

const Preview = ({ previewId, previewName }) => {
  console.log(previewId);
  const handlePublish = async () => {
    const publishPreview = await Api.publishPreview(previewId);

    console.log(publishPreview);
  };

  return (
    <>
      <Button text="Publish" marginBottom="1" handleClick={handlePublish} />
      <SectionContainer borderBottom="yes">
        <StylediFrame
          src={`https://${previewName}.introvaerts.com/`}
        ></StylediFrame>
      </SectionContainer>
    </>
  );
};

export default Preview;
