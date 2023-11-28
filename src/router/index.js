import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name:'ICAMDATA',
        redirect:"/HomePageNew",
        children: [
            { path: 'VENUE',component: () => import('@/view/VENUE.vue'),},
            { path: 'Programme',component: () => import('@/view/Programme.vue'),},
            { path: '', component: () => import('@/view/HomePageNew.vue') },
            { path:'HOME',component: () => import('@/view/HomePageNew.vue')},
            { path: 'DataTime',component: () => import('@/view/DataTime.vue')},
            { path: 'Committees',component: () => import('@/view/Committees.vue')},
            { path: 'Registration',component: () => import('@/view/Registration.vue')},
            { path: 'InvitedSpeaker',component: () => import('@/view/InvitedSpeakers.vue')},
            { path: 'Rupdate',component:()=>import("@/view/RegistrationUpdate.vue")}

        ],

    },
    {path:'/Programme',
        children: [
            {path: 'Schdule',component: () => import('@/view/Schdule.vue')},
            {path: 'IcamdataCollections',component: () => import('@/view/IcamdataCollections.vue')},
            {path: 'SatelliteMeeting',component: () => import('@/view/SatelliteMeeting.vue')},
            {path: 'BestPosterAwards',component: () => import('@/view/BestPosterAwards.vue')},
            {path: 'PosterSession',component: () => import('@/view/PosterSession.vue')}

        ]
    },
    {path: '/VENUE',
        children: [
            {path: 'Travel_Info',component: () => import('@/view/Travel_Info.vue')},
            {path: 'Northwest_Normal_University',component: () => import('@/view/Northwest_Normal_University.vue')},
            {path:'Accommodation',component: () => import('@/view/Accommodation.vue') }
        ]
    }

];

const router= createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
});
// 路由守卫
router.beforeEach((to, from, next) => {
    console.log(to);

    // 跳转
    next()
    // 返回 false 禁止跳转
    // return false
})

export default router
