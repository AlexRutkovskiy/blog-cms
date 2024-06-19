import { FC, ReactNode } from "react"
import classNames from "classnames";

import type { Tag } from "./types"
import "./Title.scss"

interface IProps {
    children: ReactNode;
    tag?: Tag;
    markered?: boolean
}

const mainClass="title"

export const Title: FC<IProps> = (props: IProps) => {
    const Tag = props?.tag || "h1";
    
    return (
        <Tag 
            className={classNames(mainClass, `${mainClass}--${Tag}`, {
                [`${mainClass}--marked`]: props?.markered,
            })}
        >
            {props.children}
        </Tag>
    )
}