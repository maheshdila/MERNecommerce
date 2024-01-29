/*
import axios, {AxiosInstance} from "axios";
import BASE_URL from '../config/ApiConfig.ts';

const instance:AxiosInstance= axios.create({
    baseURL:BASE_URL
});

instance.interceptors.request.use(
    (config)=>{

        let token = document.cookie.split('; ')
            .find(record=>record.startsWith('token=')) || null;
        token = token?.split('=')[1];
        config.headers.Authorization=token;
        return config;
    },
    (error)=>{return Promise.reject(error)}
);

export default instance;*/
/*
import axios, { AxiosInstance } from "axios";
import BASE_URL from '../config/ApiConfig.ts';

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL
});
*/

/*
instance.interceptors.request.use(
    (config) => {
        // Get the token from the cookie
        let token = document.cookie.split('; ')
            .find(record => record.startsWith('token=')) || null;
        token = token?.split('=')[1];

        // Set the original token as Authorization header
        config.headers['X-Original-Token'] = token;

        // Use the modified token for authorization
        config.headers.Authorization = token;

        return config;
    },
    (error) => { return Promise.reject(error) }
);

export default instance;
*/


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
