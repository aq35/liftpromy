// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '@/assets/resume/css/resume.css'; // テンプレートのCSSをインポート
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(router).mount('#app');