"use client"

import Link from "next/link"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { StyledButton } from "~/components/nextui/button"
import { client } from "~/utils/client"
import Loading from "../loading"
import { string } from "yup"
import { handleValidate } from "~/helpers"
import toast from "react-hot-toast"

const ResetPassword = () => {
    const [formError, setFormError] = useState<{password?: string}>()
    const [loading, setLoading] = useState<boolean>(true)
    const [isValidResetCode, setValidResetCode] = useState<boolean>(false)
    const router = useRouter()

    const searchParams = useSearchParams()
    const code = searchParams.get("code")
    const email = searchParams.get("email")

    if(!code || !email) return notFound()

    useEffect(() => {
        client.post("/auth/check-reset-code", { email, resetCode: code })
            .then(res => {
                setValidResetCode(res.response.ok)
                setLoading(false)
            })
    }, [])

    if(loading) return <Loading />
    if(!isValidResetCode) return notFound()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = Object.fromEntries([...new FormData(e.target)])
        const validateResult = await handleValidate(formData, {
            password: string()
                .min(6, "Password must have a minimum of 6 characters")
                .required("Please enter new password")
        })
        if(!validateResult.isValid) return setFormError(validateResult.errors)
        setFormError({})
        const { response, data} = await client.post("/auth/reset-password", {
            email, resetCode: code, newPassword: formData.password
        })
        if(!response.ok) return toast.error("Something went wrong")
        toast.success("Password changed successfully")
        router.push(("/login"))
    }

    return <>
        <div
            className="fixed top-1/2 left-1/2 max-w-[500px] w-[90%] bg-gray-950 p-5 rounded-xl
            -translate-x-1/2 -translate-y-1/2 text-gray-300 select-none"
        >
            <h3 className="text-white text-lg font-medium text-center">
                Reset Password
            </h3>
            <form
                action=""
                className="mt-5 flex flex-col"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col mt-4">
                    <label
                        htmlFor="login-password"
                        className="font-medium text-sm"
                    >
                        New Password{" "}
                        {formError?.password && (
                            <span className="text-red-500">
                                - {formError.password}
                            </span>
                        )}
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        className="h-9 px-3 rounded bg-gray-800"
                        placeholder="Enter new password..."
                    />
                </div>
                
                <StyledButton
                    size="md"
                    color="primary"
                    type="submit"
                    className="mt-5"
                >
                    Confirm
                </StyledButton>
            </form>
        </div>
    </>
}

export default ResetPassword