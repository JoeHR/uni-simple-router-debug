import Vue from 'vue'
import App from './App.vue'
import {
	router,
	RouterMount
} from './router.js'

Vue.use(router)

App.myType = 'app'
const app = new Vue({
	...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
console.log(app)
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
console.log(app)
app.$mount() //为了兼容小程序及app端必须这样写才有效果
// #endif

// // #ifndef VUE3
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// App.mpType = 'app'

// const app = new Vue({
//     ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// import App from './App.vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif
