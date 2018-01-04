import Vue from 'vue';
import VueRouter from 'vue-router';

/* Views
----------------------------------------------------------*/
import TopView from './views/Top/template.vue';
import QuestionListView from './views/QuestionList/template.vue';
import QuestionView from './views/Question/template.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { name: 'top', path: '/', component: TopView },
    { name: 'list', path: '/list/:category/', component: QuestionListView },
    { name: 'question', path: '/question/:category/:id/', component: QuestionView },
  ],
});
