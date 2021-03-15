import SectionContainer from '../../../shared/components/SectionContainer';

import { StylediFrame } from './Styles';

const Preview = ({ previewId, previewName }) => {
  return (
    <SectionContainer borderBottom="yes">
      <StylediFrame src="https://business.introvaerts.com/"></StylediFrame>
    </SectionContainer>
  );
};

export default Preview;
