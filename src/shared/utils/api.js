import axios from 'axios';
import { storeToken, getToken } from './helpers';
import {
  createUserEndpoint,
  loginEndpoint,
  usersInfoEndpoint,
  createSubdomainEndpoint,
  subdomainByIdEndpoint,
  subdomainAvailableEndpoint,
  createGalleryEndpoint,
  galleryByIdEndpoint,
  uploadImageEndpoint,
  galleryByNameEndpoint,
  uploadAboutImageEndpoint,
  // imageByIdEndpoint,
  publishPreviewSubdomain,
} from './endpoints';

const Api = {
  createUser: async (email, password) => {
    try {
      const response = await axios.post(`${createUserEndpoint}`, {
        email,
        password,
      });
      if (parseInt(response.data.code) === 201) {
        storeToken(response.data.data.token);
      }
      return response.data;
    } catch (error) {
      console.error('createUser: ', error);
    }
  },
  login: async userPayload => {
    try {
      const response = await axios.post(`${loginEndpoint}`, userPayload);
      if (response.data.code === 200) {
        storeToken(response.data.data.token);
        return response.data;
      } else {
        console.log('no login', response.data);
      }
    } catch (error) {
      console.error('login: ', error);
    }
  },
  getUsersAccount: async () => {
    try {
      const response = await axios.get(`${usersInfoEndpoint}`, {
        headers: {
          Authorization: getToken(),
        },
      });
      return response.data;
    } catch (error) {
      console.error('getUsersAccount: ', error);
    }
  },
  //editUsersAccount: async () => {
  //  /* usersInfoEndpoint */
  //},
  createSubdomain: async input => {
    const {
      subdomain_name,
      page_title,
      theme,
      tagline,
      description,
      contact_tagline,
      first_name,
      last_name,
      business_email,
      phone_number,
      street_and_number,
      postalcode,
      city,
      country,
    } = input;
    try {
      const response = await axios.post(
        `${createSubdomainEndpoint}`,
        {
          about: {
            tagline: tagline,
            description: description,
          },
          contact: {
            address: {
              street_and_number: street_and_number,
              postalcode: postalcode,
              city: city,
              country: country,
            },
            first_name: first_name,
            last_name: last_name,
            contact_tagline: contact_tagline,
            business_email: business_email,
            phone_number: phone_number,
          },
          name: subdomain_name,
          theme: theme,
          page_title: page_title,
        },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('createSubdomain: ', error);
    }
  },
  getSubdomainById: async subdomainId => {
    try {
      const response = await axios.get(
        `${subdomainByIdEndpoint}${subdomainId}`
      );
      return response.data;
    } catch (error) {
      console.error('getSubdomainByID: ', error);
    }
  },
  editSubdomain: async (
    subdomain_id,
    subdomain_name,
    content,
    theme = 'default'
  ) => {
    const {
      page_title,
      tagline,
      description,
      contact_tagline,
      first_name,
      last_name,
      business_email,
      phone_number,
      street_and_number,
      postalcode,
      city,
      country,
    } = content;
    try {
      const response = await axios.patch(
        `${subdomainByIdEndpoint}${subdomain_id}`,
        {
          about: {
            tagline: tagline,
            description: description,
          },
          contact: {
            address: {
              street_and_number: street_and_number,
              postalcode: postalcode,
              city: city,
              country: country,
            },
            first_name: first_name,
            last_name: last_name,
            contact_tagline: contact_tagline,
            business_email: business_email,
            phone_number: phone_number,
          },
          name: subdomain_name,
          theme: theme,
          page_title: page_title,
        },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('createSubdomain: ', error);
    }
  },
  subdomainAvailable: async subdomainName => {
    /* subdomainAvailableEndpoint */
    try {
      const response = await axios.get(
        `${subdomainAvailableEndpoint}${subdomainName}`,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('subdomainAvailable: ', error);
    }
  },
  createGallery: async (name, subdomainId) => {
    try {
      // TODO: check how many galleries do already exist, max 3 galleries allowed for now
      const response = await axios.post(
        `${createGalleryEndpoint}`,
        { name, subdomainId },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      console.log('gallery successful created', response.data);
      return response.data;
    } catch (error) {
      console.error('createGallery: ', error);
    }
  },
  getGalleryById: async galleryId => {
    try {
      const response = await axios.get(`${galleryByIdEndpoint}${galleryId}`);
      if (parseInt(response.data.code) === 200) {
        return response.data;
      } else {
        console.log('no gallery for this Id');
        return {};
      }
    } catch (error) {
      console.error('getGalleryById: ', error);
    }
  },
  //editGalleryById: async () => {
  //  /* galleryByIdEndpoint */
  //},
  //deleteGalleryById: async () => {
  //  /* galleryByIdEndpoint */
  //},
  uploadImage: async formData => {
    try {
      const response = await axios.post(`${uploadImageEndpoint}`, formData, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: getToken(),
        },
      });
      return response.data;
    } catch (error) {
      console.error('uploadImage: ', error);
    }
  },
  //deleteImage: async () => {
  //  /* imageByIdEndpoint */
  //},

  publishPreview: async previewId => {
    try {
      const response = await axios.get(
        `${publishPreviewSubdomain}${previewId}`,
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      if (parseInt(response.data.code) === 200) {
        return response.data;
      } else {
        console.log('not able to publish' + response.data.code);
        return {};
      }
    } catch (error) {
      console.error('publishPreview: ', error);
    }
  },
  postAboutImage: async formData => {
    try {
      const response = await axios.patch(
        `${uploadAboutImageEndpoint}`,
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: getToken(),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('uploadImage: ', error);
    }
  },
};

export default Api;
