import axios from "axios";

const instance = axios.create({
   baseURL: "https://imdb-api.com/fa/API/Title/k_ikhaycav"
});

export default instance;