import axios from 'axios';
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
        localStorage.setItem('accessToken', response.data.token);
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
      console.log('userData: ', email, password);
      const response = await axios.post(`${createUserEndpoint}`, {
        email,
        password,
      });
      if (response.data.code === 200) console.log('Successful SignUp');
      console.log(response);
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
