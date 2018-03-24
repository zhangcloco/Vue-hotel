// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({ // 可配置hash模式或者history模式
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
