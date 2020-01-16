import axios from 'axios';

const app = axios.create({
  baseURL: 'http://10.0.0.109:3333',
});

export default app;