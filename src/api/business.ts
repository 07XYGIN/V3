import axios from '../utils/resuests'

export const getDatalist = ()=>{
  return axios.request({
      url:'/tienchin/business/list?',
      method:'get',
  })
}