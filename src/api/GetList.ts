import axios from '../utils/resuests'

export const getList = ()=>{
  return axios.request({
      url:'/getInfo',
      method:'get',
  })
}