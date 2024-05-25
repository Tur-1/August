import useRouterStore from "@/router/RouterStore";
import useAuthUserStore from "@/pages/AuthPage/stores/AuthUserStore";
import useAuthModalStore from "@/pages/AuthPage/stores/AuthModalStore"; 
import useAuthApi from "@/pages/AuthPage/api/useAuthApi";
import { isNotAuthenticated } from "@/helpers";
const AuthMiddleware = async ({ to, from, next }) =>
{

    const routeStore = useRouterStore();
    const authUser = useAuthUserStore();
 
    if (!authUser.isAuthenticated)
    {
        try
        {
            let response = await useAuthApi.getAuthUser();

            authUser.isAuthenticated = true;
            authUser.user = response.data.user;

            useAuthModalStore.close();
            return next();
            
        } catch (error)
        {
            if (isNotAuthenticated(error)) {
                routeStore.setIntendedPath(to.fullPath);
                useAuthModalStore.open();
                return next(from.fullPath);
            }
        }
      
    }

    return next();
}

export default AuthMiddleware