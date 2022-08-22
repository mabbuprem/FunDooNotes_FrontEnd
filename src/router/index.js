import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/UserSignUp.vue'
import LoginUser from '../views/LoginUser.vue'
import ForgetPass from '../views/Forget.vue'
import ResetPass from '../views/Reset.vue'
import DashbordBar from '../views/Dashbord.vue'
import GetAllNotes from '../views/GetNote.vue'
import Dialog from '../views/DialogBox.vue'
import ApplicationUI from '../views/ApplicecationView.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'RegistrationView',
    component: RegistrationView
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  
  {
    path: '/forget',
    name: 'ForgetPass',
    component: ForgetPass
  },
  {
    path: '/resetPassword/:token',
    name: 'ResetPass',
    component: ResetPass
  },
  {
    path: '/dashbordbar',
    name: 'DashbordBar',
    component: DashbordBar,
    children:[
      {
      name: 'GetAllNotes',
      path: '/',
      component: GetAllNotes
      }
    ]
  
  },

  {
    path: '/Dialogbox',
    name: 'Dialog',
    component: Dialog
  },

  {
    path: '/application',
    name: 'ApplivationUI',
    component: ApplicationUI
  },
  
   

   

  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
