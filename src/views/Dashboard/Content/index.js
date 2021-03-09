import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';

const Content = () => {
  return (
    <>
      <h2>Content</h2>
      <form>
        <SectionContainer>
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
          />
          <FormRow
            htmlFor="password"
            label="password"
            type="password"
            id="password"
            name="password"
          />
        </SectionContainer>
        <SectionContainer>
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
          />
        </SectionContainer>
        <SectionContainer>
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Content;
