import {createRouter, createWebHashHistory} from "vue-router";

import DataTime from "@/view/DataTime.vue";
import HomePageNew from "@/view/HomePageNew.vue";
import Accommodation from "@/view/Accommodation.vue";
import Committees from "@/view/Committees.vue";
import Registration from "@/view/Registration.vue";
import Northwest_Normal_University from "@/view/Northwest_Normal_University.vue";
import Travel_Info from "@/view/Travel_Info.vue";
import BestPosterAwards from "@/view/BestPosterAwards.vue";
import IcamdataCollections from "@/view/IcamdataCollections.vue";
import PosterSession from "@/view/PosterSession.vue";
import SatelliteMeeting from "@/view/SatelliteMeeting.vue";
import Schdule from "@/view/Schdule.vue";
import InvitedSpeakers from "@/view/InvitedSpeakers.vue";
import Programme from "@/view/Programme.vue";
import VENUE from "@/view/VENUE.vue";


const routes = [
    {
        path: '/',
        name:'ICAMDATA',
        redirect:"/HomePageNew",
        children: [
            { path: 'VENUE',component: VENUE},
            { path: 'Programme',component: Programme,},
            { path: '', component: HomePageNew },
            { path:'HOME',component: HomePageNew},
            { path: 'DataTime',component: DataTime},
            { path: 'Committees',component: Committees},
            { path: 'Registration',component: Registration},
            { path: 'InvitedSpeaker',component: InvitedSpeakers}

        ],

    },
    {path:'/Programme',
        children: [
            {path: 'Schdule',component: Schdule},
            {path: 'IcamdataCollections',component: IcamdataCollections},
            {path: 'SatelliteMeeting',component: SatelliteMeeting},
            {path: 'BestPosterAwards',component: BestPosterAwards},
            {path: 'PosterSession',component: PosterSession}

        ]
    },
    {path: '/VENUE',
        children: [
            {path: 'Travel_Info',component: Travel_Info},
            {path: 'Northwest_Normal_University',component: Northwest_Normal_University},
            {path:'Accommodation',component: Accommodation }
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