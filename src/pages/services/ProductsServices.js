import axios from 'axios';

var ProductsServices = {
  getProducts: async () => {
    try {

      var ProductsAPI = axios.get('https://havaianasback-1.onrender.com/produtos');
      return await ProductsAPI;
    } catch (error) {
      throw error;
    }
  },


};

export default ProductsServices;