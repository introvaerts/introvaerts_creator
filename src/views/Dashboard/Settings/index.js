import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import GalleryRow from '../../../shared/components/GalleryRow';
import FormRowArea from '../../../shared/components/FormRowArea';
import Button from '../../../shared/components/Button';

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <form method="POST">
        {/* HEADER */}
        <SectionContainer border="yes" padding="2">
          <h2>Header</h2>
          <FormRow
            width="25"
            htmlFor="page_title"
            label="page title"
            type="text"
            id="page_title"
            name="page_title"
          />
        </SectionContainer>
        {/* ABOUT */}
        <SectionContainer border="yes" padding="2">
          <h2>About</h2>
          <FormRow
            width="25"
            htmlFor="tagline"
            label="tagline"
            type="text"
            id="tagline"
            name="tagline"
            errorMessage="this is an error message"
          />
          <FormRowArea
            width="25"
            htmlFor="description"
            label="description"
            type="text"
            id="description"
            name="description"
          />
        </SectionContainer>
        <SectionContainer border="yes" padding="2">
          <GalleryRow
            width="35"
            htmlFor="description"
            label="description"
            type="text"
            id="description"
            name="description"
          />
        </SectionContainer>
      </form>
    </div>
  );
};

export default Settings;
