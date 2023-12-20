import axios from '../utils/resuests'

export const getList = ()=>{
  return axios.request({
      url:'/getInfo',
      method:'get',
  })
}
export const getDatalist = (params)=>{
  return axios.request({
    url:'/tienchin/clue/list',
    method:'get',
    params
})
}
export const getS = (params)=>{
  return axios.request({
    url:"/tienchin/clue/list?",
    method:'get',
    params
  })
}