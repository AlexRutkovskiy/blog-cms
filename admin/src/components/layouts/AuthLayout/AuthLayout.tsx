import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useIsAuth } from "@utils/hooks/useIsAuth"
import { ROUTES } from "@utils/constans/routes"
import "./AuthLayout.scss"

const mainClass="auth-layout"

export const AuthLayout = () => {
    const isSignIn = useIsAuth()
    const location = useLocation()

    if(isSignIn) {
        return <Navigate to={ROUTES.ADMIN.INDEX} replace/>
    }

    if(!location.pathname.includes(ROUTES.AUTH.SIGN_IN) && !location.pathname.includes(ROUTES.AUTH.SIGN_UP)) {
        return <Navigate to={ROUTES.AUTH.SIGN_IN} replace/>
    }
    
    return (
        <>
            <main className={mainClass}>
                <div className={`${mainClass}__wrapper`}>
                    <div className={`${mainClass}__scroll`}>
                        <div className={`${mainClass}__container`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}