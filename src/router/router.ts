import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/login',name:'login', component: ()=>import('../views/Login.vue') 
  },
  // {
  //   path: '/',name:'home', component: ()=>import('../view/home.vue') ,
  //   children: [{path: '/daping',name:'daping', component: ()=>import('../view/daping.vue') },]
  // },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

//   router.beforeEach((to, from,next) => {
//     console.log(to,from);
//     let token = localStorage.getItem('token')
//     if (token) {
//         if (to.path=='/login') {
//             next('/')
//         }else{
//             next()
//         }
//     }else{
//         if (to.path=='/login') {
//             next()
//         }else{
//             next('/login')
//         }
//     }
//   })
export default router