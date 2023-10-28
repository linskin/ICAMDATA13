import vue from "@vitejs/plugin-vue";

Vue.use(VueRouter)
const routes =[
    {
        path:'/',
        component:()=>import('../App.vue'),
        redirect:"/home",
        children:[
            {path:'home',component:()=>import('../')}
        ]
    }
]