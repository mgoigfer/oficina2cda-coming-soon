/*
|------------------------------------------------------------------------------
| Project Dependencies
|------------------------------------------------------------------------------
| First we will load all of this project's JavaScript dependencies which
| includes Vue and other libraries. It is a great starting point when
| building robust, powerful web applications using Vue.
*/

/* Vendor */
import Vue from 'vue';
import Vuex from 'vuex';

/* Pages */
import App from 'pages/App';

/* Vue Store */
import store from './store';

/*
|------------------------------------------------------------------------------
| Vue Application
|------------------------------------------------------------------------------
| Next, we will create a fresh Vue application instance and attach it to
| the main page.
*/

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
  Vue.config.productionTip = false;
}

Vue.use(Vuex);

// Create Vue application instance.
window.Oficina2cda = new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
});

// Detect mobiles.
const ua = navigator.userAgent;
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua) // eslint-disable-line
) {
  window.Oficina2cda.$store.commit('isMobile');
}


// Mount Vue app.
window.Oficina2cda.$mount('#app');
