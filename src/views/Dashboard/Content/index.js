import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import FormRowArea from '../../../shared/components/FormRowArea';
import Button from '../../../shared/components/Button';

const Content = () => {
  return (
    <>
      <form>
        <SectionContainer border="yes" padding="2">
          <h2>Header</h2>
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
            width="25"
          />
          <FormRow
            htmlFor="password"
            label="password"
            type="password"
            id="password"
            name="password"
            width="25"
          />
        </SectionContainer>
        <SectionContainer border="yes" padding="2" sectionTitle="Contact">
          <h2>Contact</h2>
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
            width="25"
          />
        </SectionContainer>
        <SectionContainer border="yes" padding="2" sectionTitle="About">
          <h2>About</h2>
          <FormRowArea
            htmlFor="description"
            label="description"
            type="description"
            id="description"
            name="description"
            width="25"
          />
        </SectionContainer>
        <SectionContainer borderBottom="yes" padding="2" align="center">
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Content;
