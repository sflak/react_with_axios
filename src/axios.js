import axios from 'axios';

// incase you want to use different configs in other places in your application
const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com'
});

export default instance;
