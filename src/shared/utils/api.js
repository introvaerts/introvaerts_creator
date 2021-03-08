import axios from 'axios';
import { storeToken } from './helpers';
import {
  loginEndpoint,
  createUserEndpoint,
  uploadImageEndpoint,
} from './endpoints';

const Api = {
  login: async userPayload => {
    try {
      const response = await axios.post(`${loginEndpoint}`, userPayload);
      if (response.data.code === 200) {
        storeToken(response.data.token);
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
        storeToken(response.data.token);
      }
      return response.data;
    } catch (error) {
      console.log('createUser: ', error);
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
