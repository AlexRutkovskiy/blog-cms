import { FC, ComponentPropsWithoutRef } from "react"
import "./Input.scss"

type IProps = ComponentPropsWithoutRef<"input"> & {
    id: string;
    label?: string;
    fieldType?: string;
    name: string;
}

const mainClass = "input"

export const Input: FC<IProps> = ({id, label, fieldType, ...rest}: IProps) => {
    return (
        <div className={`${mainClass} ${mainClass}--${fieldType}`}>
            {label && <label htmlFor={id} className={`${mainClass}__label`}>{label}</label>}
            <input className={`${mainClass}__field`} id={id} {...rest}/>
        </div>
    )
}