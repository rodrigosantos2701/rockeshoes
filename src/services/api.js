import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/access-control-allow-origin/http://localhost:3333',
});

export default api;
