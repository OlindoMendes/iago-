import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard'
import BaseButton from './components/ui/BaseButton'
import BaseBadge from './components/ui/BaseBadge'

const app = createApp(App)

app.use(store )
app.use(router)

app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge)
app.component('base-button', BaseButton)

app.mount('#app');
