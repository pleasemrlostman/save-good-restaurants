import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: ``,
  },
};

const api = axios.create(config);

export default api;
