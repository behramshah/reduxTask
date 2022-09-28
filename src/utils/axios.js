const axios = require('axios').default;

export const axiosInstance = axios.create({
    baseURL: 'https://northwind.vercel.app/api/customers',
    timeout: 2000,
    headers: {'X-Custom-Header': 'products'}
});