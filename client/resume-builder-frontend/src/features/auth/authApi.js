import axios from 'axios';

export const registerApi = async (userData) => {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData, {
        headers: { 'Content-Type': 'application/json' }
    });
    return response.data;
};
