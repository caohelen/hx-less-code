import { createApp } from 'vue'
import './style.css'
import router from "./routes/index";
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
// import '@arco-design/web-vue/dist/arco.css';
// import '@arco-design/theme-line/index.less';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-themes/vue-gi-demo/index.less';
import 'uno.css';
import mitt from 'mitt';

import App from './App.vue'

const pinia = createPinia()


const app = createApp(App)
app.use(pinia)
app.use(ArcoVue)
app.use(ArcoVueIcon);
app.use(router);

const bus = mitt();
app.config.globalProperties.$bus = bus;

app.mount('#app')
