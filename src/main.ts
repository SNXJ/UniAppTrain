import { createSSRApp } from 'vue'
import pinia from './stores'

import App from './App.vue'

// import Vconsole from 'vconsole'
/*
// #ifndef APP-PLUS
const vConsole = new Vconsole()
// #endif
*/

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
