import axios from '../axios';

const endpoints = {
  login: (data) => axios.post('/v1/auth/email/login', data),
}

export default endpoints;