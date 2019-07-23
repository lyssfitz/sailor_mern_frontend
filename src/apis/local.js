import axios from "axios";
import history from "./../history";
import store from "./../store";

const LocalAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

LocalAPI.interceptors.request.use((request) => {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
})

LocalAPI.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    history.push("/");
    return Promise.reject("Invalid Token");
  }
})

export default LocalAPI;