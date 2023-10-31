import {createRouter, createWebHashHistory} from "vue-router";

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
import Tour from "@/view/Tour.vue";
import InvitedSpeakers from "@/view/InvitedSpeakers.vue";
import LogIn from "@/view/LogIn.vue";
import LogUp from "@/view/LogUp.vue";
// import ICAMDATACHAPTER from "https://physics.nist.gov/Icamdata/Homepage/charter.html"


const routes = [
    {
        path: '/',
        redirect:"/HomePageNew",
        children: [
            { path: '', component: HomePageNew },
            { path:'/HOME',component: HomePageNew},
            { path: '/DataTime',component: DataTime},
            { path: '/Accommodation',component: Accommodation},
            { path: '/Committees',component: Committees},
            { path: '/Lanzhou',component: Lanzhou},
            { path: '/Northwest_Normal_University',component: Northwest_Normal_University},
            { path: '/Registration',component: Registration},
            { path: '/Travel_Info',component: Travel_Info},
            { path: '/BestPosterAwards',component: BestPosterAwards},
            { path: '/DataBase',component: DataBase},
            { path: '/GanSuProvince',component: GanSuProvince},
            { path: '/IcamdataCollections',component: IcamdataCollections},
            { path: '/PosterSession',component: PosterSession},
            { path: '/SatelliteMeeting',component: SatelliteMeeting},
            { path: '/Schdule',component: Schdule},
            { path: '/Tour',component: Tour},
            { path: '/InvitedSpeakers',component: InvitedSpeakers},
            { path: '/LogIn',component: LogIn},
            { path: '/LogUp',component: LogUp},
            // { path: '/ICAMDATACHAPTER',component: Travel_Info},
        ],
    },
];

const router= createRouter({
    // 4. 采用hash 模式
    history:
        createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, //使用上方定义的路由配置
});

export default router