import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/'
export default {
  getList: async function(page) {
    let url;
    if (page != null & page > 1) {
      url = 'https://reqres.in/api/users?per_page=5&page=' + page;
    } else {
      url = 'https://reqres.in/api/users?per_page=5';
    }
    const response = await axios.get(url);
    return response.data;
  },
  getAllUsers: async function() {
    const url = 'https://reqres.in/api/users?per_page=12';
    const response = await axios.get(url);
    return response.data;
  },
  getUserById: async function(id) {
    const url = baseUrl + 'users/' + id;
    const photoUrl = 'https://reqres.in/api/users/' + id
    const avatar = await (await axios.get(photoUrl)).data.data.avatar
    const response = await axios.get(url);
    return {...response.data, avatar};
  },
};
