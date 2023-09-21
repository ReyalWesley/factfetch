import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { createApp } from 'vue'
import App from './App.vue'

/* add icons to the library */
library.add(faArrowDown)

createApp(App).mount('#app')
