import axios from 'axios';

export const registerApi = async (userData) => {
     
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data;
};

export const loginApi = async (userData) => {
     
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    return response.data;
};