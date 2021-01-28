import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import userProfile from '../views/userProfile.vue'
import Admin from '../views/Admin.vue'
import store from '../store'
import {users} from '../assets/users' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/user/:userId',
    name : 'userProfile',
    component : userProfile
  },
  {
    path : '/admin',
    name : 'Admin',
    component : Admin,
    meta : {
      requiresAdmin :true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to, from, next) => {


  const user = store.state.User.user; 
  const isAdmin = true
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if(!user){
    await store.dispatch('User/setUser', users[0])
    console.log(store.state.User.user)
  }

  if(requiresAdmin && !isAdmin) next({name : 'Home'})

  else  next()

})

export default router
