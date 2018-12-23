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

/* Pages */
import App from 'pages/App';

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

// Create Vue application instance.
window.Oficina2cda = new Vue({
  render: h => h(App),
});

// Mount Vue app.
window.Oficina2cda.$mount('#app');
