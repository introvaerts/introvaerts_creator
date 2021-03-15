import { useState, useEffect } from 'react';
// api
import Api from '../../../shared/utils/api';
// shared components
import SectionContainer from '../../../shared/components/SectionContainer';
import FormRow from '../../../shared/components/FormRow';
import GalleryRow from '../../../shared/components/GalleryRow';
import FormRowArea from '../../../shared/components/FormRowArea';
import Button from '../../../shared/components/Button';
// settings
import { allowedNumberOfGalleries } from '../../../shared/config/app.settings';
// time delay for firing API call
import useDebounce from '../../../shared/utils/hooks/useDebounce';
import { ThemeConsumer } from 'styled-components';

const Content = ({ subdomain }) => {
  // change name of subdomain to data for better code reading
  const data = subdomain;
  const [errorMessages, setErrorMessages] = useState({});
  const [userInput, setUserInput] = useState({
    subdomain_name: '',
    page_title: '',
    tagline: '',
    description: '',
    galleryName: '',
    galleries: [],
    contact_tagline: '',
    first_name: '',
    last_name: '',
    business_email: '',
    phone_number: '',
    street_and_number: '',
    postalcode: '',
    city: '',
    country: '',
  });
  const [isAvailable, setIsAvailable] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  // costum hook return latest value (after 500ms) or previous value of subdomain_name (only have the API call fire when user stops typing)
  const debouncedSubdomainName = useDebounce(userInput.subdomain_name, 500);

  useEffect(() => {
    let newUserInput = { galleryName: '' };
    if (data.subdomain) {
      const { name, page_title } = data.subdomain;
      // gather gallery name and id
      let galleries = [];
      data.galleries.forEach(gallery => {
        galleries.push({ name: gallery.name, id: gallery._id });
      });
      // cut off -preview of preview subdomain name
      let alteredPreviewSubdomainName = name.replace('-preview', '');
      newUserInput = {
        ...newUserInput,
        subdomain_name: alteredPreviewSubdomainName
          ? alteredPreviewSubdomainName
          : '',
        page_title: page_title ? page_title : '',
        galleries: galleries ? galleries : [],
      };

      // is there a about object inside subdomain?
      if (data.subdomain.about) {
        const { tagline, description } = data.subdomain.about;

        newUserInput = {
          ...newUserInput,
          tagline: tagline ? tagline : '',
          description: description ? description : '',
        };
      }
      // is there a contact object inside subdomain?
      if (data.subdomain.contact) {
        const {
          first_name,
          last_name,
          contact_tagline,
          business_email,
          phone_number,
        } = data.subdomain.contact;

        newUserInput = {
          ...newUserInput,
          first_name: first_name ? first_name : '',
          last_name: last_name ? last_name : '',
          contact_tagline: contact_tagline ? contact_tagline : '',
          business_email: business_email ? business_email : '',
          phone_number: phone_number ? phone_number : '',
        };
        // is there an address object inside contact?
        if (data.subdomain.contact.address) {
          const {
            street_and_number,
            postalcode,
            city,
            country,
          } = data.subdomain.contact.address;

          newUserInput = {
            ...newUserInput,
            street_and_number: street_and_number ? street_and_number : '',
            postalcode: postalcode ? postalcode : '',
            city: city ? city : '',
            country: country ? country : '',
          };
        }
      }
      setUserInput(newUserInput);
    }
  }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    if (userInput.galleryName) createGallery();
    editSubdomain();
  };

  const handleUserInput = e => {
    const { name, value } = e.target;
    setUserInput(userInput => ({
      ...userInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (debouncedSubdomainName) {
      setIsSearching(true);
      const is = async () => {
        const response = await Api.subdomainAvailable(debouncedSubdomainName);
        setIsSearching(false);
        setIsAvailable(response.isAvailable);
      };
      is();
    } else {
      setIsAvailable(true);
    }
  }, [debouncedSubdomainName]);

  const editSubdomain = async () => {
    await Api.editSubdomain(
      data.subdomain._id,
      `${userInput.subdomain_name}-preview`,
      userInput
    );
  };

  // when isAvailable changes setErrorMessage
  useEffect(() => {
    if (!isAvailable) {
      setErrorMessages({
        ...errorMessages,
        subdomainNameAvailable: `This subdomain name is not available.`,
      });
    } else {
      setErrorMessages({
        ...errorMessages,
        subdomainNameAvailable: '',
      });
    }
  }, [isAvailable]);

  // when isSearching changes setErrorMessage
  useEffect(() => {
    if (!isSearching) {
      setErrorMessages({
        ...errorMessages,
        subdomainNameAvailable: '',
      });
    } else {
      setErrorMessages({
        ...errorMessages,
        subdomainNameAvailable: 'seaching ...',
      });
    }
  }, [isSearching]);

  const createGallery = async () => {
    const { galleryName } = userInput;
    if (
      galleryName.trim() &&
      userInput.galleries.length < allowedNumberOfGalleries
    ) {
      const response = await Api.createGallery(
        userInput.galleryName,
        data.subdomain._id
      );
      userInput.galleries = [...userInput.galleries, response.data._id];
    } else if (userInput.galleries.length >= allowedNumberOfGalleries) {
      // TODO: Error message if user enters more than the allowed number of galleries
      console.log(`You can create ${allowedNumberOfGalleries} galleries only.`);
      setErrorMessages({
        ...errorMessages,
        galleryName: `You can create ${allowedNumberOfGalleries} galleries only.`,
      });
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

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        {/* Subdomain */}
        <SectionContainer border="yes" padding="2">
          <h2>Subdomain</h2>
          <FormRow
            width="25"
            htmlFor="subdomain_name"
            label="subdomain name"
            type="text"
            id="subdomain_name"
            name="subdomain_name"
            value={userInput.subdomain_name}
            required={true}
            handleChange={handleUserInput}
            errorMessage={errorMessages.subdomainNameAvailable}
          />
        </SectionContainer>
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
            value={userInput.page_title}
            required={true}
            handleChange={handleUserInput}
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
            value={userInput.tagline}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRowArea
            width="25"
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
        <SectionContainer border="yes" padding="2">
          <h2>Galleries</h2>
          <GalleryRow
            width="35"
            htmlFor="galleryName"
            label="gallery name"
            type="text"
            id="galleryName"
            name="galleryName"
            value={userInput.galleryName}
            required={false}
            handleChange={handleUserInput}
            handleClick={createGallery}
            galleries={userInput.galleries}
            errorMessage={errorMessages.galleryName}
          />
        </SectionContainer>
        {/* CONTACT */}
        <SectionContainer border="yes" padding="2">
          <h2>Contact</h2>
          <FormRow
            width="25"
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
            width="25"
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
            width="25"
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
            width="25"
            htmlFor="business_email"
            label="business_email"
            type="email"
            id="business_email"
            name="business_email"
            value={userInput.business_email}
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            title="Please put in a valid email address: accountname@domainname.domain"
            required={true}
            handleChange={handleUserInput}
          />
          <FormRow
            width="25"
            htmlFor="phone_number"
            label="phone_number"
            type="tel"
            id="phone_number"
            name="phone_number"
            value={userInput.phone_number}
            required={false}
            handleChange={handleUserInput}
          />
          <FormRow
            width="25"
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
            width="25"
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
            width="25"
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
            width="25"
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
        <SectionContainer borderBottom="yes" padding="2" align="center">
          <Button type="submit" text="Submit" />
        </SectionContainer>
      </form>
    </>
  );
};

export default Content;
