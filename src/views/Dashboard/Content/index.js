import { useState } from 'react';
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import Button from '../../../shared/components/Button';

const Content = () => {
  const [userInput, setUserInput] = useState({
    subdomain_name: '',
    page_title: '',
    tagline: '',
    description: '',
    galleryName: '',
    contact_tagline: '',
    first_name: '',
    last_name: '',
    email: '',
    telephone: '',
    street_and_number: '',
    postalcode: '',
    city: '',
    country: '',
  });
  const [galleries, setGalleries] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    /* saveSubdomain(); */
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
    console.log(userInput.galleryName);
  };

  const addGallery = () => {
    console.log('before adding:', galleries);
    const { galleryName } = userInput;

    /* galleries.push(galleryName); */

    setGalleries([...galleries, galleryName]);
  };

  console.log('after adding:', galleries);

  return (
    <>
      <h2>Content</h2>
      <form method="POST" onSubmit={handleSubmit}>
        {/* HEADER */}
        <SectionContainer>
          <FormRow
            htmlFor="subdomain_name"
            label="name your page"
            type="text"
            id="subdomain"
            name="subdomain_name"
            value={userInput.subdomain_name}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="page_title"
            label="page title"
            type="text"
            id="page_title"
            name="page_title"
            value={userInput.page_title}
            required
            handleChange={handleUserInput}
          />
        </SectionContainer>
        {/* ABOUT */}
        <SectionContainer>
          <FormRow
            htmlFor="tagline"
            label="tagline"
            type="text"
            id="tagline"
            name="tagline"
            value={userInput.tagline}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="description"
            label="description"
            type="text"
            id="description"
            name="description"
            value={userInput.description}
            required
            handleChange={handleUserInput}
          />
        </SectionContainer>
        {/* GALLERY */}
        <SectionContainer>
          <FormRow
            htmlFor="galleryName"
            label="gallery name"
            type="text"
            id="galleryName"
            name="galleryName"
            value={userInput.galleryName}
            required
            handleChange={handleUserInput}
          />
          <Button type="button" text="add gallery" handleClick={addGallery} />
        </SectionContainer>
        {/* CONTACT */}
        <SectionContainer>
          <FormRow
            htmlFor="contact_tagline"
            label="motivate your fellows to contact you"
            type="text"
            id="contact_tagline"
            name="contact_tagline"
            value={userInput.contact_tagline}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="first_name"
            label="first name"
            type="text"
            id="first_name"
            name="first_name"
            value={userInput.first_name}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="last_name"
            label="last name"
            type="text"
            id="last_name"
            name="last_name"
            value={userInput.last_name}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="email"
            label="email"
            type="email"
            id="email"
            name="email"
            value={userInput.email}
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            title="Please put in a valid email address: accountname@domainname.domain"
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="telephone"
            label="telephone"
            type="tel"
            id="telephone"
            name="telephone"
            value={userInput.telephone}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="street_and_number"
            label="street and number"
            type="text"
            id="street_and_number"
            name="street_and_number"
            value={userInput.street_and_number}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="postalcode"
            label="postalcode"
            type="text"
            id="postalcode"
            name="postalcode"
            value={userInput.postalcode}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="city"
            label="city"
            type="text"
            id="city"
            name="city"
            value={userInput.city}
            required
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="country"
            label="country"
            type="text"
            id="country"
            name="country"
            value={userInput.country}
            required
            handleChange={handleUserInput}
          />
        </SectionContainer>
        {/* SUBMIT */}
        <SectionContainer>
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Content;
