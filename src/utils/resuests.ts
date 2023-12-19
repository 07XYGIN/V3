import axios from "axios";  
import { useStore } from '../store/index';
const store = useStore()
console.log();
  
const instance = axios.create({  
  baseURL: '/api',  
  timeout: 6000,  
  headers: {  
    'X-Custom-Header': 'foobar',  
    'Authorization':store.token
  }  
});  
instance.interceptors.response.use((response) => {  
  return response.data;  
});  
export default instance