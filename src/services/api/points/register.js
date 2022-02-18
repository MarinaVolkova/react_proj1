import axios from "../axios";

const regpoints = {
    register: (data) => axios.post('/v1/auth/email/register', data)
}

export default regpoints;