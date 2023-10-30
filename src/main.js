import './assets/main.css'
import { plugin, defaultConfig } from '@formkit/vue'

import { createApp } from 'vue'
import App from './App.vue'
import config from '../formkit.config.js'


createApp(App).use(plugin, defaultConfig(config)).mount('#app')

