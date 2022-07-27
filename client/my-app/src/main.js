import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import User from './pages/User.vue'
import Login from './pages/auth/Login.vue'
import Register from './pages/auth/Register.vue'




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/user/:id",
      component: User
    },
    {
      path: "/auth",
      children: [
        {
          path: "sign-in",
          component: Login
        },
        {
          path: "sign-up",
          component: Register
        }
      ]
    }
  ]
})


const app = createApp(App)
app.use(router)
app.mount("#app")