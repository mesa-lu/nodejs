import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Mm = () => import('@/views/Mm.vue')

const routes = [
  {path: '/',redirect:'/home'},
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
      },
      {
        path: 'mm',
        name: 'Mm',
        component: Mm
      }
    ],
  },

//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: About
//   },
//   {
//     path: '/mm',
//     name: 'Mm',
//     component: Mm
// }, 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
