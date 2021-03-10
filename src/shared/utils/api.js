import axios from 'axios';
import { storeToken, getToken } from './helpers';
import {
  loginEndpoint,
  getUsersAccountEndpoint,
  createUserEndpoint,
  createSubdomainEndpoint,
  getSubdomainEndpoint,
  createGalleryEndpoint,
  uploadImageEndpoint,
} from './endpoints';

const Api = {
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
  getUsersAccount: async () => {
    try {
      const response = await axios.get(`${getUsersAccountEndpoint}`, {
        headers: {
          Authorization: getToken(),
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('getUsersAccount: ', error);
    }
  },
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
  uploadImage: async () => {
    try {
      console.log('image upload');
    } catch (error) {
      console.error('uploadImage: ', error);
    }
  },
};

export default Api;
