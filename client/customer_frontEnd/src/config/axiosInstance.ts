import axios from 'axios';
import BASE_URL from '../config/ApiConfig.ts'

// Set up Axios instance
const axiosInstance = axios.create({
        baseURL:BASE_URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
            // Get the token from cookies
            const token = getCookie('token');

            // Add the token to the request headers
            if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
            }

            return config;
    },
    (error) => {
            return Promise.reject(error);
    }
);

// Function to get a cookie by name
function getCookie(name) {
        const cookieArray = document.cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
                const cookiePair = cookieArray[i].split('=');
                const cookieKey = cookiePair[0].trim();
                if (cookieKey === name) {
                        return decodeURIComponent(cookiePair[1]);
                }
        }
        return null;
}

export default axiosInstance;
