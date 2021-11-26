import Vue from 'vue'
import Buefy from 'buefy'
//import Cookies from 'js-cookie';
//import moment from 'moment'
//import 'buefy/dist/buefy.css'
// Styles
import '@/scss/main.scss';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMUjCjakZQOzfXCVQzl8SObH0JtX1Dhug",
  authDomain: "uochi-8e1a9.firebaseapp.com",
  projectId: "uochi-8e1a9",
  storageBucket: "uochi-8e1a9.appspot.com",
  messagingSenderId: "314040568498",
  appId: "1:314040568498:web:62b0fa7b7e87144a4cd7ab",
  measurementId: "G-LHDK3XJX8D"
};

// Initialize Firebase
initializeApp(firebaseConfig);


library.add(fas, faJs, faVuejs);
Vue.component('vue-fontawesome', FontAwesomeIcon);




Vue.use(VueAxios, axios);
//colocar aqui a URL do seu backend
//Vue.axios.defaults.baseURL = "https://testedjango.robsonjoo.repl.co/api/";
Vue.axios.defaults.baseURL = "/api/";
Vue.axios.defaults.withCredentials = true;
Vue.axios.defaults.xsrfCookieName = "csrftoken";
Vue.axios.defaults.xsrfHeaderName = "X-CSRFToken";

/*
Vue.axios.interceptors.request.use(async (request) => {
    try {
      console.log('passando por aqui');
        const csrf = Cookies.get('csrftoken');
        console.log(csrf);
        if (csrf) {
          request.withCredentials = true;
          request.headers.common['X-CSRFToken'] = csrf;
        }
        return request;
    } catch (err) {
        throw new Error(`axios# Problem with request during pre-flight phase: ${err}.`);
    }
});
*/


Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
  defaultDateParser: date => {
    console.log('chegou aqui mesmo');
    return  date
    //return m.isValid() ? m.toDate() : null
  }
  //defaultDateFormatter: (date) => moment(date).format("MM-DD-YYYY")  
});

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: function() {
    console.log('iniciou');
    //console.log(this.axios);
    var self = this;
    this.axios.get('currentuser/').then((response) => {
      console.log('usuário logado', response.data);
      if (response.data) {
        self.$store.dispatch('setCurrentUser', response.data);
      }
      
    })    
  },
}).$mount('#app')