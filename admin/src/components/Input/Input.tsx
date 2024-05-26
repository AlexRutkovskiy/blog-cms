import { FC, InputHTMLAttributes } from "react"
import classnames from "classnames"
import "./Input.scss"

const mainClass="field"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: "text" | "email" | "password";
    label: string;
    error?: string;
}

const Input: FC<IProps> = ({name, type, label, error, ...rest}: IProps) => {
    return (
        <div className={`${mainClass}`}>
            <input 
                className={classnames(`${mainClass}__input`, {
                    [`${mainClass}__input-not-empty`]: rest?.value,
                    [`${mainClass}__input-error`]: error
                })}
                id={name} 
                type={type} 
                name={name} 
                {...rest}
            />
            <label htmlFor={name} className={`${mainClass}__label`}>
                <span className={`${mainClass}__label-content`}>{label}</span>
            </label>
            {error && <span className={`${mainClass}__error`}>{error}</span>}
        </div>
    )
}

export { Input }