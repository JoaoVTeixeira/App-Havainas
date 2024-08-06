import axios from 'axios';

var AuthServices = {
  login: async (body) => {
    try {

      var AuthAPI = axios.post('http://10.0.2.2:3000/auth/login', body);
      return await AuthAPI;
    } catch (error) {
      throw error;
    }
  },


};

export default AuthServices;