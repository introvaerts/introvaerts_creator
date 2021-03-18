// api
import Api from '../../../shared/utils/api';
import SectionContainer from '../../../shared/components/SectionContainer';
import ReverseButton from '../../../shared/components/ReverseButton';

import { StylediFrame } from './Styles';
import { useEffect, useState } from 'react';

const Preview = ({ previewId, publishedId, refreshApp }) => {
  const [previewName, setPreviewName] = useState('');
  const [publishedName, setPublishedName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (previewId) {
      const fetchData = async () => {
        const result = await Api.getSubdomainById(previewId);
        setPreviewName(result.data.subdomain.name);
        setLoading(false);
      };
      fetchData();
    }
  }, [previewId]);

  useEffect(() => {
    if (publishedId) {
      const fetchData = async () => {
        const result = await Api.getSubdomainById(publishedId);
        setPublishedName(result.data.subdomain.name);
      };
      fetchData();
    }
  }, [publishedName, publishedId]);

  const handlePublish = async () => {
    await Api.publishPreview(previewId);
    await refreshApp(Date.now());
    const publishedNameNow = previewName.replace('-preview', '');
    window.open(`https://${publishedNameNow}.introvaerts.com/`, '_blank');
    await setPublishedName('');
  };

  return (
    <>
      {!loading ? (
        <>
          <ReverseButton
            text="Publish"
            marginBottom="1"
            handleClick={handlePublish}
          />{' '}
          <SectionContainer borderBottom="yes">
            <StylediFrame
              src={`https://${previewName}.introvaerts.com/`}
            ></StylediFrame>
          </SectionContainer>
        </>
      ) : null}
    </>
  );
};

export default Preview;
