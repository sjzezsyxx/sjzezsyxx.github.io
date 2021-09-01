import { createApp } from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';
import { registerSW } from 'virtual:pwa-register';

createApp(App).mount('#app');
registerSW();
