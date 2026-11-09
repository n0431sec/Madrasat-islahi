import './assets/main.css'
import 'typeface-roboto-condensed';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import YouTube from 'vue3-youtube';

const app = createApp(App)

app.use(router)
// app.component('YoutubePlayer', YouTube)
app.mount('#app')
