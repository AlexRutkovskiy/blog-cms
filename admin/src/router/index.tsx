import { Route, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";

import { ProtectedLayout } from "@components/layouts/ProtectedLayout/ProtectedLayout"
import { AuthLayout } from "@components/layouts/AuthLayout/AuthLayout"
import { ROUTES } from "@utils/constans/routes"

import { Auth } from "@pages/Auth/Auth"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.INDEX} element={<Navigate to={ROUTES.ADMIN.INDEX} replace/>} />
      <Route path={ROUTES.ADMIN.INDEX}  element={<ProtectedLayout />}>
        
      </Route>
      <Route path={ROUTES.AUTH.INDEX} element={<AuthLayout/>}>
        <Route path={ROUTES.AUTH.SIGN_IN} element={<Auth isLoginPage/>}/>
        <Route path={ROUTES.AUTH.SIGN_UP} element={<Auth/>}/>
      </Route>
    </>
  )
)