import Vue from 'vue';
import Router from 'vue-router';
import CustomerInfo from './views/CustomerInfo.vue';
import CustomerQuestionnaire from './views/CustomerQuestionnaire.vue';
import CustomerContent from './views/CustomerContent.vue';
import Result from './views/Result.vue';

Vue.use(Router) // use：プラグインを適用する

export default new Router({
    mode: 'history', // hashを取り除く
    routes: [
        {
            path: '/customer-info',
            component: CustomerInfo
        },
        {
            path: '/customer-questionnaire',
            component: CustomerQuestionnaire
        },
        {
            path: '/customer-content',
            component: CustomerContent
        },
        {
            path: '/result',
            component: Result
        },

    ]
})