import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

import DataTime from "@/view/DataTime.vue";
import HomePageNew from "@/view/HomePageNew.vue";
import Accommodation from "@/view/Accommodation.vue";
import Committees from "@/view/Committees.vue";
import Lanzhou from "@/view/Lanzhou.vue";
import Registration from "@/view/Registration.vue";
import Northwest_Normal_University from "@/view/Northwest_Normal_University.vue";
import Travel_Info from "@/view/Travel_Info.vue";
import BestPosterAwards from "@/view/BestPosterAwards.vue";
import DataBase from "@/view/DataBase.vue";
import GanSuProvince from "@/view/GanSuProvince.vue";
import IcamdataCollections from "@/view/IcamdataCollections.vue";
import PosterSession from "@/view/PosterSession.vue";
import SatelliteMeeting from "@/view/SatelliteMeeting.vue";
import Schdule from "@/view/Schdule.vue";
// import Tour from "@/view/Tour.vue";
import InvitedSpeakers from "@/view/InvitedSpeakers.vue";
import LogIn from "@/view/LogIn.vue";
import LogUp from "@/view/LogUp.vue";
import DateBaseNew from "@/view/DateBaseNew.vue";
import Programme from "@/view/Programme.vue";
import VENUE from "@/view/VENUE.vue";
// import ICAMDATACHAPTER from "https://physics.nist.gov/Icamdata/Homepage/charter.html"


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

        ],

    },
    {path:'/Programme',
        children: [
            {path: 'InvitedSpeakers',component: InvitedSpeakers},
            {path:'DateBaseNew',component: DateBaseNew},
            {path: 'Schdule',component: Schdule},
            {path: 'IcamdataCollections',component: IcamdataCollections},
            {path: 'SatelliteMeeting',component: SatelliteMeeting},
            {path: 'BestPosterAwards',component: BestPosterAwards},
            {path: 'PosterSession',component: PosterSession}

        ]
    },
    {path: '/VENUE',
        children: [
            {path:'GanSuProvince',component: GanSuProvince },
            {path: 'Travel_Info',component: Travel_Info},
            {path: 'Northwest_Normal_University',component: Northwest_Normal_University},
            {path: 'Lanzhou',component: Lanzhou},
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