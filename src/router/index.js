import Vue from 'vue'
import Router from 'vue-router'
import page from '@/components/index.js'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'FrontPage',
      component: page.FrontPage
    },
    {
      path: '/404',
      name: 'NotFound',
      component: page.NotFound
    },
    {
      path: '/TechStack',
      name: 'TechStack',
      component: page.TechStack
    },
    {
      path: '/ToolBar',
      name: 'ToolBar',
      component: page.ToolBar
    },
    {
      path: '/Items',
      name: 'Items',
      component: page.Items
    },
    {
      path: '/Mood',
      name: 'Mood',
      component: page.Mood
    },
  ]
})
