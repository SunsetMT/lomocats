import { createRouter, createWebHashHistory } from 'vue-router'
import UserPage from "@/views/UserPage";
import ChatPage from "@/views/ChatPage";

const routes = [
  {
    path: '/',
    name: 'user',
    component: UserPage
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
