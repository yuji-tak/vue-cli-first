import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedInfo: [],
    },
    mutations: {
        addAllInfo(state, info) {
            state.selectedInfo.push(info);
        }
    }
});