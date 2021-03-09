import { useState } from 'react';
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';

const Content = () => {
  const [userInput, setUserInput] = useState({
    page_title: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
    console.log(userInput);
  };

  return (
    <>
      <h2>Content</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <SectionContainer>
          <FormRow
            type="text"
            name="page_title"
            label="page title"
            id="page_title"
            value={userInput.page_title}
            required
            handleChange={handleUserInput}
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
