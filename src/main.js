import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/sugar-main.scss'
import './assets/style/sugar-iview.scss'
import './assets/style/iconfont.scss'
import El from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AT from 'at-ui'
import 'at-ui-style'
import {JL} from './views/jmeter/js/JmeterTestElement'
import Axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import RESTAPI from './assets/js/rest'

Vue.config.productionTip = false
Vue.prototype.$JL = JL
Vue.prototype.$axios = Axios
Vue.prototype.$RESTAPI = RESTAPI

Vue.use(El)
Vue.use(AT)
Vue.use(iView)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
