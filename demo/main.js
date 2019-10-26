import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import component from '@source/all';

Vue.config.productionTip = false;
Vue.use(component, require.context('@/views/widgets', false, /.*\.vue$/));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
