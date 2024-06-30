import { FC, SyntheticEvent } from "react"

import { Input } from "@components/UI/Input/Input"
import { Checkbox } from "@components/UI/Checkbox/Checkbox";
import { IPropsDymanicComponents, FIELD_TYPE } from "./types"
import "./DynamicForm.scss"
import { Button } from "@components/UI/Button/Button";


interface IProps {
    fields: IPropsDymanicComponents[];
    onSubmit: (event: SyntheticEvent<HTMLFormElement>)=> void;
}

const mainClass = "dynamic-form"

export const DynamicForm: FC<IProps> = ({fields, onSubmit}:IProps) => {
    return (
        <>
            <form onSubmit={onSubmit} className={mainClass}>
                {
                    fields.map((field) => {
                        if (field.fieldType === FIELD_TYPE.INPUT) {
                            return (
                                <div className={`${mainClass}__row`} key={`${field.id}`}>
                                    <Input {...field} />
                                </div>
                            )
                        }

                        if (field.fieldType === FIELD_TYPE.CHECKBOX) {
                            return (
                                <div className={`${mainClass}__row`} key={`${field.id}`}>
                                    <Checkbox {...field} />
                                </div>
                            )
                        }

                        if (field.fieldType === FIELD_TYPE.BUTTON) {
                            return (
                                <div className={`${mainClass}__row`} key={`${field.id}`}>
                                    <Button {...field} full />
                                </div>
                            )
                        }

                        return null
                    })
                }
            </form>
        </>
    )
}