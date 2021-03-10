import { useState } from 'react';
// api
import Api from '../../../shared/utils/api';
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import GalleryRow from '../../../shared/components/GalleryRow';
import Button from '../../../shared/components/Button';
// settings
import { allowedNumberOfGalleries } from '../../../shared/config/app.settings';

const Content = () => {
  //TODO: initialize with data from database
  const [userInput, setUserInput] = useState({
    page_title: '',
    tagline: '',
    description: '',
    galleryName: '',
    galleries: [],
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

  const handleSubmit = e => {
    e.preventDefault();
    addGallery();
    editSubdomain();
    createGalleries();
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));

    // TODO: check if subdomain is available b/c it is unique
  };

  // adds a gallery to the userInput key galleries and clears the field
  const addGallery = () => {
    const { galleryName } = userInput;
    // put galleryName into the array holding all galleries
    if (
      galleryName.trim() &&
      userInput.galleries.length < allowedNumberOfGalleries
    ) {
      userInput.galleries = [...userInput.galleries, galleryName];
    } else if (userInput.galleries.length >= allowedNumberOfGalleries) {
      // TODO: Error message if user enters more than the allowed number of galleries
      console.log(`You can create ${allowedNumberOfGalleries} galleries only.`);
    } else {
      // TODO: Error message if user tries to add empty gallery
      console.log('put in a gallery name');
    }
    //clear galleryName in userInput
    setUserInput(userInput => ({
      ...userInput,
      galleryName: '',
    }));
  };

  const editSubdomain = async () => {
    console.log('Subdomain created');
    console.log(userInput);
    const response = await Api.editSubdomain(userInput);
    console.log('editSubdomain response');
    console.log(response);
  };

  const createGalleries = () => {
    console.log('Galleries created');
    console.log(userInput.galleries);
  };

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        {/* HEADER */}
        <SectionContainer>
          <FormRow
            htmlFor="page_title"
            label="page title"
            type="text"
            id="page_title"
            name="page_title"
            value={userInput.page_title}
            required={true}
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
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="description"
            label="description"
            type="text"
            id="description"
            name="description"
            value={userInput.description}
            required={false}
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
            required={false}
            handleChange={handleUserInput}
          />
          <Button type="button" text="add gallery" handleClick={addGallery} />
          {/* CLARIFY: How to delete a gallery out of this list? */}
          {userInput.galleries
            ? userInput.galleries.map((gallery, i) => (
                <GalleryRow key={i} galleryName={gallery} />
              ))
            : null}
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
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="first_name"
            label="first name"
            type="text"
            id="first_name"
            name="first_name"
            value={userInput.first_name}
            required={true}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="last_name"
            label="last name"
            type="text"
            id="last_name"
            name="last_name"
            value={userInput.last_name}
            required={true}
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
            required={true}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="telephone"
            label="telephone"
            type="tel"
            id="telephone"
            name="telephone"
            value={userInput.telephone}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="street_and_number"
            label="street and number"
            type="text"
            id="street_and_number"
            name="street_and_number"
            value={userInput.street_and_number}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="postalcode"
            label="postalcode"
            type="text"
            id="postalcode"
            name="postalcode"
            value={userInput.postalcode}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="city"
            label="city"
            type="text"
            id="city"
            name="city"
            value={userInput.city}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            htmlFor="country"
            label="country"
            type="text"
            id="country"
            name="country"
            value={userInput.country}
            required={false}
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
