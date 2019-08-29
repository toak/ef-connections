import Vue from "vue";
import vueResource from "vue-resource";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import DynamicForm from "vue-dynamic-form-component";
import App from "./App.vue";

Vue.use(vueResource);
Vue.use(ElementUI);
Vue.use(DynamicForm);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
