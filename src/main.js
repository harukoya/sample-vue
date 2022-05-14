import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.directive("border", {
  bind() {
    // ディレクティブが初めて対象の要素に紐づいたとき
  },
  inserted() {
    // 親Nodeに挿入されたとき
  },
  update() {
    // コンポーネントが更新されるたび。子コンポーネントが更新される前
  },
  componentUpdated() {
    // コンポーネントが更新されるたび。子コンポーネントが更新された後
  },
  unbind() {
    // ディレクティブが紐づいている要素から取り除かれた時
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
