import { getPong } from './shared/api/api';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@picocss/pico';
import './style.css';

// 백엔드 서버 테스트
getPong().then(text => console.log(text)).catch(err => console.log(err));

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')