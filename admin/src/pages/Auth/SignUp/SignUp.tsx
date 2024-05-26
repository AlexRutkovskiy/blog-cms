import React from "react"
import { Link } from "react-router-dom"
import "./SignUp.scss"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

import { PATH } from "@utils/constants/routes"
import { useTranslate } from "@hooks/useTranslate"

const mainClass="sign-up"

const SignUp: React.FC  = () => {
    const translate = useTranslate()

    return (
        <>
            <div className={mainClass}>
                <div className={`${mainClass}__wrapper`}>
                    <form>
                        <div className="form-title__wrapper">
                            <h1 className="form-title">{translate.auth.register.title}</h1>
                        </div>
                        <Input 
                            name="firstName"
                            type="text"
                            label={translate.fields.placeholders.firstName}
                        />
                        <Input 
                            name="lastName"
                            type="text"
                            label={translate.fields.placeholders.lastName}
                        />
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
                                label={translate.auth.register.btnRegister}
                                large
                            />
                        </div>
                    </form>
                    <div className="form-link__wrapper">
                        <span>{translate.auth.register.linkToLogin.description}{" "}</span>
                        <Link 
                            to={PATH.AUTH.SIGN_IN}
                            className="form-link"
                        >
                            {translate.auth.register.linkToLogin.label}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SignUp }