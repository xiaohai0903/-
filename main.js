import Vue from 'vue'
import App from './App'
import rwjTabbar from './components/rwj-tabbar.vue'
import one from './components/one.vue'
import {myRequest} from './request/request.js'
import store from 'store/index.js'
import formDate from 'static/js/formData.js'

Vue.config.productionTip = false

Vue.prototype.formDate = formDate
Vue.component('rwj-tabbar',rwjTabbar)
Vue.component('one',one)
Vue.prototype.$store = store
Vue.prototype.$myRequest = myRequest

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
