import { FC, SyntheticEvent } from "react"
import { Link } from "react-router-dom"

import { DynamicForm } from "@components/views/DynamicForm/DynamicForm"
import { Title } from "@components/UI/Title/Title";
import { ROUTES } from "@utils/constans/routes";
import "./SignIn.scss"

import type { IPropsDymanicComponents } from "@components/views/DynamicForm/types";

interface IProps {
    fields: IPropsDymanicComponents[];
    onSubmit: (event: SyntheticEvent<HTMLFormElement>) => void;
}

const mainClass = "sign-in"

export const SignIn: FC<IProps> = (props: IProps) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__wrapper`}>  
                <div className={`${mainClass}__title`}>
                    <Title tag="h2" markered>Login</Title>
                </div>
                <DynamicForm {...props}/>
                <div className={`${mainClass}__footer`}>
                    <p className={`${mainClass}__content`}>Don't have account?</p> 
                    <Link 
                        to={`${ROUTES.AUTH.INDEX}/${ROUTES.AUTH.SIGN_UP}`} 
                        className={`${mainClass}__link link link--bold`}
                        replace
                    >
                        Sign Up
                    </Link> 
                </div>
            </div>
        </div>
    )
}