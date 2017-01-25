import Vue from 'vue'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'

import {mapState} from 'vuex'
import StyleInjector from './components/StyleInjector.vue'
import Toast from './components/share/Toast.vue'

Vue.use(VueResource)

Vue.filter('toDate',date=>{
    const d=new Date(date)
    return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+d.getDate()+'日'
})

new Vue({
    router,
    store,
    components: {StyleInjector,Toast},
    computed: mapState(['isToasting'])
}).$mount('#blog')
