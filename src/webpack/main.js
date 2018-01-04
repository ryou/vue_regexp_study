import Vue from 'vue';
import Vuetify from 'vuetify';
import store from './store';
import router from './router';

import App from './app/template.vue';

Vue.use(Vuetify);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  router,
  render(h) {
    return h(App);
  },
});
