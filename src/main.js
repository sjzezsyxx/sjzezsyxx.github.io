import { createApp } from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

createApp(App).mount('#app');

if (navigator.serviceWorker) {
    window.addEventListener('load', (event) => {
        navigator.serviceWorker.getRegistrations()
            .then((registrations) => {
                registrations.forEach(registration => registration.unregister());
                console.log('Successfully unregistered all service workers.');
            });
    });
}
