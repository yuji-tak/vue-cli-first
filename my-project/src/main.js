import Vue from 'vue'
import App from './App.vue' //componentのオブジェクトを返す

Vue.config.productionTip = false

new Vue({

  render: h => h(App), //render関数を用い、仮想DOMを返す
  // render: function(h) {
  //   return h(App);
  // }
}).$mount('#app') //$mountメソッドで仮想DOMやその差分を実際のDOMに追加
