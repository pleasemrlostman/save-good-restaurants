import axios from "axios";

const config = {
  baseURL: "",
  headers: {
    Authorization: ``,
  },
};

const api = axios.create(config);

export default api;
