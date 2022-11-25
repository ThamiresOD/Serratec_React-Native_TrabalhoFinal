import axios from 'axios';

const api = axios.create({
    baseURL: "https://mockapi.io/clone/637e39ce9c2635df8f9cf063"
})

export default api