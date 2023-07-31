import { Router } from "@vaadin/router";

export function initRouter() {
    const router = new Router(document.querySelector('#app'))

    router.setRoutes([
        {
            path:"/",
            component: "home-page",
            action: () => import("./pages/home-page") 
        },
        {
            path:"/feedback-page",
            component: "feedback-page",
            action: () => import("./pages/feedback-page") 
        },
        {
            path:"/servicos-page",
            component: "servicos-page",
            action: () => import("./pages/servicos-page") 
        },
        {
            path:"/sobre-nos-page",
            component: "sobre-nos-page",
            action: () => import("./pages/sobre-nos-page") 
        },
    ])
    
    
    return router

}

