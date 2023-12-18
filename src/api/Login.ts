import axios from '../utils/resuests'

export const Login = (data:object)=>{
  return axios.request({
      url:'/login',
      method:'post',
      data
  })
}