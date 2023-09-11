import home from '../pages/Home.vue';
import review from '../pages/review.vue';

export default [
    {
        path: '/home',
        name: 'home',
        component: home,
    }
    ,
    {
        name: 'review',
        path: '/review',
        component: review,
    },
    {
        path: '/',
        redirect: '/home'
    }
]