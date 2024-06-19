import { FC, ComponentPropsWithoutRef } from "react"
import "./Checkbox.scss"

type IProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
    id: string;
    label?: string;
    fieldType?: string;
    name: string;
}

const mainClass = "checkbox"

export const Checkbox: FC<IProps> = ({label, ...rest}: IProps) => {
    return (
        <label className={mainClass}>
            <span className={`${mainClass}__label`}>{label}</span>
            <input type="checkbox" className={`${mainClass}__field`} {...rest}/>
            <span className={`${mainClass}__checkmark`}></span>
        </label>
    )
}