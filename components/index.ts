import type { App } from 'vue'
import * as components from './components'

export default {
  install(app: App) {
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        const component = (components as any)[key]
        if (component.install) {
          app.use(component)
        }
      }
    }
  }
}
