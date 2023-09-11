
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import home from './home';


export default new Vuex.Store({
    //A large warehouse needs to register all small warehouses
    modules: {
        home,
    }
})