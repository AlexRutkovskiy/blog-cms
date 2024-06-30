import { FC, useCallback } from "react"
import { SignIn } from "./SignIn/SignIn"
import { SignUp } from "./SignUp/SignUp"
import { fields } from "./fields";

interface IProps {
    isLoginPage?: boolean
}

export const Auth: FC<IProps> = ({isLoginPage}: IProps) => {
    const handleOnSubmit = useCallback((event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        // const form = event.currentTarget
        // const data = new FormData(form)
        
    }, [])
    
    if(isLoginPage) {
        return (
            <SignIn 
                fields={fields.signIn} 
                onSubmit={handleOnSubmit}
            />
        )
    }

    return (
        <SignUp 
            fields={fields.signUp} 
            onSubmit={handleOnSubmit}
        />
    )
}