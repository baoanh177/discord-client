import { object } from "yup"

export const handleValidate = async (data: object, rules: object = {}) => {
    const response: { isValid: boolean, errors: {} } = { isValid: true, errors: {} }
    try {
        const schema = object({
            ...rules,
        })
        await schema.validate(data, {
            abortEarly: false,  
        })
    } catch (e: any) {
        const errors = Object.fromEntries(
            e.inner.map((item: any) => [item.path, item.message])
        )
        response.isValid = false
        response.errors = errors
    }
    return response
}
