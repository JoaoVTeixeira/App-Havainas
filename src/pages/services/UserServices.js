import axios from 'axios';

var UserServices = {
  register: async (body) => {
    try {

      var UserAPI = axios.post('https://app-havaianas.adaptable.app/users', body);
      return await UserAPI;
    } catch (error) {
      throw error;
    }
  },


};

export default UserServices;