import { Request } from 'express'
import { validationResult, ValidationError } from 'express-validator'

function formatValidationError(
    err: Record<string, ValidationError>
): Record<string, string> {
    let data: Record<string, string> = {}
    for (let [key, value] of Object.entries(err)) {
        data[key] = value?.msg
    }

    return data
}

export function errorValidation(req: Request): null | Record<string, string> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return formatValidationError(errors.mapped())
    }

    return null
}
