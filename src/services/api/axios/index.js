import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://nestjs-boilerplate-test.herokuapp.com/api'
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
          config.headers.authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    
export default axiosInstance;