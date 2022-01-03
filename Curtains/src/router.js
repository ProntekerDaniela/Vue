import CurtainList from "@/components/CurtainList"
import Curtain from "@/pages/Curtain"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: CurtainList},
    {path: '/Curtain', component: Curtain},
]

const router = new VueRouter({routes})

export default router