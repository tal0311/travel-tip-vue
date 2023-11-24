import {svgService} from '@/services/svg.service'

// plugins/i18n.js
export const svgPlugin= {
  install: (app, options) => {
    // inject a globally available $translate() method
    app.config.globalProperties.$getSvg = (key) =>
     svgService.getSvg(key)
  }
}


