import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

Vue.use(Vuex);

import user from './modules/user'
const store = new Vuex.Store({
    modules: {
        user,
    },
    getters
})

export default store

