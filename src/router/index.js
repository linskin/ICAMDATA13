import {createRouter, createWebHashHistory} from "vue-router";

import register from "@/view/register.vue";
import DataTime from "@/view/DataTime.vue";
import HomePageNew from "@/view/HomePageNew.vue";

const routes = [
    {
        path: '/',
        redirect:"/HomePageNew",
        children: [
            { path: '', component: HomePageNew },
            { path:'/HOME',component: HomePageNew},
            { path: '/register',component: register},
            { path: '/DataTime',component: DataTime},
            // { path: '/',component: },
            // { path: '/',component: },
            // { path: '/',component: },
            // { path: '/',component: },
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