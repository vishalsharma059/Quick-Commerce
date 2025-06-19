import axios from 'axios';

const API = axios.create({
    baseURL: 'https://quick-commerce-mwc6.onrender.com/api', // Adjust the base URL as needed
});

export default API;

// 2. Login function
export const loginAdmin = async (email, password) => {
  try {
    const response = await API.post('/auth/login', { email, password });
    return { success: true, data: response.data }; 
  } catch (error) {
    return { success: false, error: error.response?.data?.message || 'Login failed' };
  }
};