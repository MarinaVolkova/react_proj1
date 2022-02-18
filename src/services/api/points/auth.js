import axios from "../axios";

const points = {
    login: (data) => axios.post('/v1/auth/email/login', data)
}

export default points;