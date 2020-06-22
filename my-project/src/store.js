import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedInfo: [],
    },
    mutations: {
        addBasicInfo(state, info) {
            state.selectedInfo.push(info);
        },
        addQuestionnaireInfo(state, info) {
            state.selectedInfo.splice(1, 0, info);
        },
        addConsultationContent(state, info) {
            state.selectedInfo.splice(2, 0, info);
        }
    }
});