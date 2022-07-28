import { createRouter, createWebHistory } from 'vue-router';

import CoachView from './view/CoachView'
import ContactCoach from './view/ContactCoach'
import RegisterCoachView from './view/RegisterCoachView'
import RequestView from './view/RequestView'

import CoachDetail from './view/CoachDetail'

const router = createRouter({
   history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachView },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, ///coachs/c1/contact
      ],
    },
    { path: '/register', component: RegisterCoachView },
    { path: '/requests', component: RequestView },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
