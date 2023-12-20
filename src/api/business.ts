import axios from '../utils/resuests'

export const getDatalist = (params)=>{
  return axios.request({
      url:'/tienchin/business/list?',
      method:'get',
      params
  })
}
export const getDatalists = (params)=>{
  return axios.request({
      url:'/tienchin/activity/list',
      method:'get',
      params
  })
}
export const gets = (params)=>{
  return axios.request({
      url:'/tienchin/course/list',
      method:'get',
      params
  })
}