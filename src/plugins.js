import { svgService } from '@/services/svg.service'


// plugins/i18n.js
export const svgPlugin = {
  install: (app) => {
    app.config.globalProperties.$getSvg = (key,options) => svgService.getSvg(key,options)
  }
}




export const modalPlugin = {
  install(app) {
    
    const showModal = (modalInfo) => {
        console.log('showModal', modalInfo);
        
      const event = new CustomEvent('show-modal', { detail:{...modalInfo} });
      window.dispatchEvent(event);
    };

    const hideModal = () => {
      const event = new CustomEvent('hide-modal');
      window.dispatchEvent(event);
    };

    app.config.globalProperties.$modal = {
      show: showModal,
      hide: hideModal,
    };

   
  }
};