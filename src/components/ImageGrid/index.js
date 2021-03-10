import { StyledGrid } from './Styles';

import Thumbnail from '../../shared/components/Thumbnail';

export const ImageGrid = () => {
  return (
    <StyledGrid>
      <Thumbnail src="https://picsum.photos/200/140" />
      <Thumbnail src="https://picsum.photos/300/200" />
      <Thumbnail src="https://picsum.photos/200/140" />
      <Thumbnail src="https://picsum.photos/100/30" />
      <Thumbnail src="https://picsum.photos/200/400" />
      <Thumbnail src="https://picsum.photos/200/140" />
      <Thumbnail src="https://picsum.photos/300/200" />
      <Thumbnail src="https://picsum.photos/200/140" />
      <Thumbnail src="https://picsum.photos/100/30" />
      <Thumbnail src="https://picsum.photos/200/400" />
    </StyledGrid>
  );
};

export default ImageGrid;
