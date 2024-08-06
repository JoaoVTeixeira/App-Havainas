import axios from 'axios';

var UserServices = {
  register: async (body) => {
    try {

      var UserAPI = axios.post('http://10.0.2.2:3000/users', body);
      return await UserAPI;
    } catch (error) {
      throw error;
    }
  },


};

export default UserServices;