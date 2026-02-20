import axios from 'axios';

// Get the API URL from environment variables or use a smart fallback
const getBaseURL = () => {
    if (import.meta.env.VITE_API_URL) return import.meta.env.VITE_API_URL;
    if (import.meta.env.DEV) return 'http://localhost:5000/api';
    return '/api';
};

const finalBaseURL = getBaseURL();

const api = axios.create({
    baseURL: finalBaseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    // Useful for testing with credentials
    withCredentials: true
});

// Add a request interceptor to include the JWT token in every request
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

// Optional: Add a response interceptor to handle common errors (like 401 Unauthorized)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle token expiration or unauthorized access
            console.warn('Session expired or unauthorized');
            // localStorage.removeItem('token'); // Optional: clear token
        }
        return Promise.reject(error);
    }
);

export default api;
