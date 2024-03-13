"use client"
import Link from "next/link"
import { useRef, useState } from "react"
import { string } from "yup"
import { handleValidate } from "~/app/helpers/validate"
import { StyledButton } from "~/app/components/nextui/button"
import ForgotPasswordModal from "../ForgotPasswordModal"

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const [formError, setFormError] = useState<{
        email?: string
        password?: string
    }>()
    const [modal, setModal] = useState<boolean>(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = Object.fromEntries([...new FormData(e.target)])
        // Validate
        const res = await handleValidate(formData, {
            email: string()
                .required("Please enter your email")
                .email("Please enter a valid email"),
            password: string().required("Please enter your password"),
        })
        if (!res.isValid) {
            return setFormError(res.errors)
        }
        setFormError({})
        // Call api
    }

    const handleForgotPassword = async () => {
        const res = await handleValidate(
            { email: emailRef?.current?.value },
            {
                email: string()
                    .required("Please enter your email")
                    .email("Please enter a valid email"),
            }
        )
        if (!res.isValid) return setFormError(res.errors)
        setFormError({})
        setModal(true)
        // Send email
    }

    return (
        <>
            <div
                className="fixed top-1/2 left-1/2 max-w-[500px] w-[90%] bg-gray-950 p-5 rounded-xl
                -translate-x-1/2 -translate-y-1/2 text-gray-300 select-none"
            >
                <ForgotPasswordModal
                    email={emailRef.current?.value}
                    onClose={() => setModal(false)}
                    isOpen={modal}
                />
                <h3 className="text-white text-lg font-medium text-center">
                    Welcome back!
                </h3>
                <p className="text-center">We're excited to see you again!</p>
                <form
                    action=""
                    className="mt-5 flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label
                            htmlFor="login-email"
                            className="font-medium text-sm"
                        >
                            Email{" "}
                            {formError?.email && (
                                <span className="text-red-500">
                                    - {formError.email}
                                </span>
                            )}
                        </label>
                        <input
                            ref={emailRef}
                            type="text"
                            id="login-email"
                            name="email"
                            className="h-9 px-3 rounded bg-gray-800"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label
                            htmlFor="login-password"
                            className="font-medium text-sm"
                        >
                            Password{" "}
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
                            placeholder="Enter your password..."
                        />
                    </div>
                    <div
                        className="text-sm text-blue-500 hover:text-blue-400 cursor-pointer transition"
                        onClick={handleForgotPassword}
                    >
                        Forgot your password?
                    </div>
                    <StyledButton
                        size="md"
                        color="primary"
                        type="submit"
                        className="mt-5"
                    >
                        Log In
                    </StyledButton>
                    <div className="text-sm mt-1">
                        Need an account?
                        <Link
                            href="/register"
                            className="text-blue-500 hover:text-blue-400 cursor-pointer transition"
                            scroll={false}
                        >
                            {" "}
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
