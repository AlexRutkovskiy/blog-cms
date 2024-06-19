import { Navigate } from "react-router-dom"
import { useIsAuth } from "@utils/hooks/useIsAuth"
import { ROUTES } from "@utils/constans/routes"
import { AppLayout } from "@components/layouts/AppLayout/AppLayout"

export const ProtectedLayout = () => {
    const isAuth = useIsAuth()

    if(!isAuth) {
        return <Navigate to={ROUTES.AUTH.INDEX}/>
    }

    return <AppLayout />
}