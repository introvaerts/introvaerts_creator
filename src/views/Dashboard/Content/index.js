import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';

const Content = () => {
  return (
    <>
      <form>
        <SectionContainer border="yes" padding="2">
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
            width="25"
            sectionTitle="Header"
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
        <SectionContainer border="yes" padding="2">
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
            width="25"
          />
        </SectionContainer>
        <SectionContainer border="yes" padding="2">
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Content;
