import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/'
export default {
  getPosts: async function(page, perPage = 20) {
      console.log(page)
    const response = await axios.get(baseUrl + "posts");
    const posts = response.data
    const shuffled = posts.sort((a, b) => 0.5 - Math.random())
    return shuffled.slice((page - 1) * perPage, page * perPage);
  }
};