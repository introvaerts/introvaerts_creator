import axios from 'axios';
import { storeToken, getToken } from './helpers';
import {
  createUserEndpoint,
  loginEndpoint,
  usersInfoEndpoint,
  createSubdomainEndpoint,
  // subdomainByIdEndpoint,
  // subdomainAvailableEndpoint,
  createGalleryEndpoint,
  // galleryByIdEndpoint,
  // uploadImageEndpoint,
  // imageByIdEndpoint,
} from './endpoints';

const Api = {
  createUser: async (email, password) => {
    try {
      const response = await axios.post(`${createUserEndpoint}`, {
        email,
        password,
      });
      if (response.data.code === 201) {
        storeToken(response.data.data.token);
      }
      console.log(response);
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
      tagline,
      description,
      contact_tagline,
      first_name,
      last_name,
      email,
      telephone,
      street_and_number,
      postalcode,
      city,
      country,
    } = input;
    try {
      const response = await axios.post(
        `${createSubdomainEndpoint}`,
        {
          //put in data
        },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      console.log('createSubdomain', response);
      return response.data;
    } catch (error) {
      console.error('createSubdomain: ', error);
    }
  },
  getSubdomain: async subdomainId => {
    try {
      const response = await axios.get(`${createUserEndpoint}subdomainId`);
      console.log('getSubdomain', response);
    } catch (error) {
      console.error('getSubdomain: ', error);
    }
  },
  //editSubdomain: async () => {
  //  /* subdomainByIdEndpoint */
  //},
  //subdomainAvailable: async () => {
  //  /* subdomainAvailableEndpoint */
  //},
  createGallery: async name => {
    try {
      // TODO: check how many galleries do already exist, max 3 galleries allowed for now
      const response = await axios.post(
        `${createGalleryEndpoint}`,
        { name },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('createGallery: ', error);
    }
  },
  //getGallery: async () => {
  //  /* galleryByIdEndpoint */
  //},
  //editGallery: async () => {
  //  /* galleryByIdEndpoint */
  //},
  //deleteGallery: async () => {
  //  /* galleryByIdEndpoint */
  //},
  uploadImage: async () => {
    try {
      console.log('image upload');
    } catch (error) {
      console.error('uploadImage: ', error);
    }
  },
  //deleteImage: async () => {
  //  /* imageByIdEndpoint */
  //},
};

export default Api;
