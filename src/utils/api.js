import axios from 'axios';

// Get the API URL from environment variables or use a safe local fallback
let baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Robust check: Ensure the baseURL ends with /api to match backend routes
// This prevents errors if the user forgets to add /api in the Vercel dashboard
const cleanBaseURL = baseURL.trim().replace(/\/$/, '');
const finalBaseURL = cleanBaseURL.includes('/api') ? cleanBaseURL : `${cleanBaseURL}/api`;

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
