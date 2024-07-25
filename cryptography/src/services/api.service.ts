import axios from 'axios';

const BASE_URL = 'http://34.163.219.17:8080';

export const apiClient = axios.create({
    baseURL: BASE_URL,
});
