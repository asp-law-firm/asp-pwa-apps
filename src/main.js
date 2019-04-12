import Vue from 'vue'
import App from './App.vue'

// Bootstrap vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import titleMixin
import titleMixin from './mixins/titleMixin'

Vue.use(BootstrapVue);
Vue.mixin(titleMixin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
