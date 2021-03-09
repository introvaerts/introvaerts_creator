import { useState } from 'react';
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';

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
    </form>
  );
};

export default Content;
