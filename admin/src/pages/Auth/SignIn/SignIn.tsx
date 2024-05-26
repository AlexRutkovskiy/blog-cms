import React from "react"
import { Link } from "react-router-dom"
import "./SignIn.scss"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { PATH } from "@utils/constants/routes"
import { useTranslate } from "@hooks/useTranslate"

const mainClass="sign-in"

const SignIn: React.FC  = () => {
    const translate = useTranslate()

    return (
        <>
            <div className={mainClass}>
                <div className={`${mainClass}__wrapper`}>
                    <form>
                        <div className="form-title__wrapper">
                            <h1 className="form-title">{translate.auth.login.title}</h1>
                        </div>
                        <Input 
                            name="email"
                            type="email"
                            label={translate.fields.placeholders.email}
                        />
                        <Input 
                            name="password"
                            type="password"
                            label={translate.fields.placeholders.password}
                        />
                        <div className="form-btn__wrapper">
                            <Button 
                                type="submit" 
                                label={translate.auth.login.btnLogin}
                                large
                            />
                        </div>
                    </form>
                    <div className="form-link__wrapper">
                        <span>{translate.auth.login.linkToLogin.description}{" "}</span>
                        <Link 
                            to={PATH.AUTH.SIGN_UP}
                            className="form-link"
                        >
                            {translate.auth.login.linkToLogin.label}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SignIn }