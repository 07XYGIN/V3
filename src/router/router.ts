import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/login',name:'login', component: ()=>import('../views/Login.vue') 
  },
  {
    path:'/',name:'index',component: ()=>import('../views/Index.vue'),
    children:[
      {
        path:'/clue/index',
        component: ()=>import('../views/clue.vue')
      },
      {
        path:'/business/index',
        component:()=>import('../views/Business.vue')
      },
      {
        path:'/activity/index',
        component:()=>import('../views/Activit.vue')
      },
      {
        path:'/course/index',
        component:()=>import('../views/course.vue')
      },
    ]
  }
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