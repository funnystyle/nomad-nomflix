import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "9daf35bf290c8837641d6c50c2abd84f",
    language: "en-US",
  },
});

export default api;
