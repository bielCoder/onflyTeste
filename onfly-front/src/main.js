import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router instance
import emitter from './eventBus';

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(router); // ESSENCIAL PARA $router FUNCIONAR
app.mount('#app')
