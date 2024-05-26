import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"

import { SignIn } from "@pages/Auth/SignIn"
import { SignUp } from "@pages/Auth/SignUp"
import { PATH } from "@utils/constants/routes"

import "./Layout.scss"

const mainClass = "layout"

const Layout = () => {
    // TODO
    const isAuth = false

    return (
        <main className={`${mainClass}`}>
            <BrowserRouter>
                {!isAuth && <Navigate to={PATH.AUTH.SIGN_UP} replace/>}
                {
                    isAuth ? (
                        <>
                            
                        </>
                    )
                    : (
                        <>
                            <Switch>
                                <Route path={PATH.AUTH.SIGN_IN} element={<SignIn />} />
                                <Route path={PATH.AUTH.SIGN_UP} element={<SignUp />} />
                            </Switch>
                        </>
                    )
                }
            </BrowserRouter>
        </main>
    )
}

export { Layout }