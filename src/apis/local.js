import axios from "axios";
import history from "./../history";
import store from "./../store";
// Creating an instance of axios and setting the base URL with which we make requests to backend
const LocalAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});
// Setting Authorization headers with each request
LocalAPI.interceptors.request.use((request) => {
  const state = store.getState();
  const token = state.auth.token;

  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }

  return request;
})
// Redirecting to homepage if token not available or invalid with each request
LocalAPI.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    history.push("/");
    return Promise.reject("Invalid Token");
  }
})

export default LocalAPI;