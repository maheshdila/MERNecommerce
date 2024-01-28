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
import axios, { AxiosInstance } from "axios";
import BASE_URL from '../config/ApiConfig.ts';

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

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
