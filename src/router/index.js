import vue from "@vitejs/plugin-vue";

Vue.use(VueRouter)
const routes =[
    {
        path:'/',
        component:()=>import('../App.vue'),
        redirect:"/home",
        children:[
            {path:'home',component:()=>import('../view/HOME.vue')},
            {path:'register',component:()=>import('../view/register.vue')},
            {path:'DataTime',component:()=>import('../view/DataTime.vue')}
        ]
    }
]