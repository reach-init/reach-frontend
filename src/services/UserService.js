import axios from 'axios';

export default {

  getList: async function(page) {
    try {
      let url;
      if(page!=null & page > 1) {
        url ="https://reqres.in/api/users?per_page=5&page="+page;
      } else {
        url = "https://reqres.in/api/users?per_page=5";
      }
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  },
  getAllUsers: async function() {
    try {
      let url ="https://reqres.in/api/users?per_page=12"
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  },
  getUserById: async function(id) {
    try {
      const url ="https://reqres.in/api/users/"+id;
      const response = await axios.get(url);
      return response.data;
    } catch(error) {
      throw error;
    }
  }
}