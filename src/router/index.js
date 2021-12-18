import { createRouter, createWebHashHistory } from 'vue-router'
import PageWrapper from "@/components/PageWrapper";
import GetTokensPage from "@/views/GetTokensPage";
import ShopPage from "@/views/ShopPage";
import UserPage from "@/views/UserPage";
import ChatPage from "@/views/ChatPage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageWrapper
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
    path: '/getTokens',
    name: 'getTokens',
    component: GetTokensPage
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopPage
  },
  {
    path: '/user',
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
