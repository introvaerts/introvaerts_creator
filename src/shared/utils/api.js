import axios from 'axios';
import { storeToken, getToken } from './helpers';
import {
  loginEndpoint,
  getUsersAccountEndpoint,
  createUserEndpoint,
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
        console.log('no login');
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
      return response.data;
    } catch (error) {
      console.log('createUser: ', error);
    }
  },
  getUsersAccount: async () => {},
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
      console.log('createGallery: ', error);
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
