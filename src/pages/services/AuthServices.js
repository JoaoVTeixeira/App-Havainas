import axios from 'axios';

var AuthServices = {
  login: async (body) => {
    try {

      var AuthAPI = axios.post('https://havaianasback-1.onrender.com/auth/login', body);
      return await AuthAPI;
    } catch (error) {
      throw error;
    }
  },


};

export default AuthServices;