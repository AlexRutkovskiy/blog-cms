import { FC, ButtonHTMLAttributes } from "react"
import classNames from "classnames"
import "./Button.scss"
import { BUTTON_STYLE_TYPE } from "./types"


interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleTypa?: BUTTON_STYLE_TYPE,
    large?: boolean,
    label: React.ReactNode
}

const mainClass = "button"

const Button: FC<IProps> = ({
    label,
    styleTypa = BUTTON_STYLE_TYPE.PRIMARY, 
    large = false,
    ...rest
}: IProps) => {
    return (
        <button 
            className={classNames(`${mainClass} ${mainClass}--${styleTypa}`, {
                [`${mainClass}--large`]: large
            })}
            {...rest}
        >
            {label}
        </button>
    )
}

export { Button }