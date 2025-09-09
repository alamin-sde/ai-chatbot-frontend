import axios from 'axios';
const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
api.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token')
        const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGJkNjk0YTVhYjVkMGZmNTlmZDhjNzUiLCJpYXQiOjE3NTczNjkxMzIsImV4cCI6MTc1Nzk3MzkzMn0.y9hsy9_aNzoSCUu7Qmt-VXCIt7gIf-pHBAULJqinIug'
        if (token) {

            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config

    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        // console.log("API Error:", message);
        return Promise.reject(error)

    }
)
export default api;