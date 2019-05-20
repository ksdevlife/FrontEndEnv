import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app')

// if you use this syntax, you need full build
// new Vue({
//     el: '#app',
//     components: {App},
//     template: '<App />'
// })