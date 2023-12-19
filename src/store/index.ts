import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useStore = defineStore('storeId', ()=>{
  const token = ref('')
  const setToken = (newtoken:any)=>{
    token.value = newtoken
  }
  const removeToken = ()=>{
    token.value = ''
  }
  return {
    token,
    setToken,
    removeToken
  }
},{
  persist:true 
})