import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index' ;
import indexpage from '@/components/main/indexpage/indexpage' ;
import technicalarticles from '@/components/main/technicalarticles/technicalarticles' ;
import message from '@/components/main/message/message' ;
import about from '@/components/main/about/about' ;

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            redirect: 'indexpage',
            name: 'index',
            component: index,
            meta: {
                title: '首页'
            },
            children:[
                {
                    path: '/indexpage',
                    name: 'indexpage',
                    component: indexpage,
                },
                {
                    path: '/technicalarticles',
                    name: 'technicalarticles',
                    component: technicalarticles,
                },
                {
                    path: '/message',
                    name: 'message',
                    component: message,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: about,
                },
            ]
        }
    ],
    linkActiveClass: 'actived',
})
