import axios from 'axios';

// Create an instance of axios


const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  // '  Access-Control-Allow-Origin':'*'
    // add more default headers here if needed
  },
});

// You can also set up interceptors for requests or responses if needed
// For example, add authorization token to every request

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
