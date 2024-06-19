import { FC, ComponentPropsWithoutRef } from "react"
import classNames from "classnames";
import "./Button.scss"

export type viewButton = "primary" | "secondary" | "negative";

type IProps =  Omit<ComponentPropsWithoutRef<"button">, "fieldType"> & {
    id: string;
    label?: string;
    name: string;
    full?: boolean;
    view?: viewButton;
}

const mainClass = "button"

export const Button: FC<IProps> = ({label, ...rest}: IProps) => {
    const viewType = rest?.view || "primary";

    return (
        <button 
            className={classNames(`${mainClass} ${mainClass}--${viewType}`, {
                [`${mainClass}--full`]: rest?.full
            })} 
            {...rest}
        >
            {label}
        </button>
    )
}