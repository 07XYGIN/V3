import axios from "axios";
let token = localStorage.getItem('token')
const instance = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': token
  }
});
instance.interceptors.response.use((response) => {
  return response.data;
}
);
export default instance