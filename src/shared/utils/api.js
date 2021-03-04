import axios from 'axios';
import {
  loginEndpoint,
  createUserEndpoint,
  uploadImageEndpoint,
} from './endpoints';

const Api = {
  login: async () => {
    try {
      const response = await axios.post(`${loginEndpoint}`);
      if (response.data.data) {
        return response.data.data;
      } else {
        console.log('no login');
      }
    } catch (error) {
      console.error('login: ', error);
    }
  },
  createUser: async (urlStr, setImgStrVar) => {
    try {
      const response = await axios.post(`${createUserEndpoint}`);
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
