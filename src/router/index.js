import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ConsultMain from "../components/ConsultMain.vue";
import FluOne from "../components/FluOne.vue"
import FluTwo from "../components/FluTwo.vue"
import FluThree from "../components/FluThree.vue"
import FluFour from "../components/FluFour.vue"
import FluFive from "../components/FluFive.vue"
import DocHome from "../components/DocHome.vue"
import DocAnalysis from "../components/DocAnalysis.vue"



const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/fluone", name: "FluOne", component: FluOne },
    { path: "/flutwo", name: "FluTwo", component: FluTwo },
    { path: "/fluthree", name: "FluThree", component: FluThree },
    { path: "/flufour", name: "FluFour", component: FluFour },
    { path: "/flufive", name: "FluFive", component: FluFive },
    { path: "/dochome", name: "DocHome", component: DocHome },
    { path: "/docanalysis", name: "DocAnalysis", component: DocAnalysis },
    { path: "/consultmain", name: "ConsultMain", component: ConsultMain },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
