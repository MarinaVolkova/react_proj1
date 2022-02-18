import axios from '../axios';

const endpoints = {
    userData: () => axios.get('/v1/auth/me'),
}

export default endpoints;