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
    }
  ]
})
