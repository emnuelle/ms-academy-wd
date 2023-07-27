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
    ])
    
    
    return router

}

