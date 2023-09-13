import useRouterStore from "@/router/RouterStore";
import { useAuthModalStore, useAuthUserStore } from "@/pages/AuthPage/stores";


const AuthMiddleware = async ({ to, from, next }) =>
{

    const routeStore = useRouterStore();
    const authUser = useAuthUserStore();

    if (!authUser.isAuthenticated)
    {
        routeStore.setIntendedPath(to.fullPath);
        useAuthModalStore.open();
        return next(from.fullPath);
    }

    return next();
}

export default AuthMiddleware