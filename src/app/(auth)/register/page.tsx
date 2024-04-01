"use client"
import { Radio, RadioGroup } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { string } from "yup"
import { handleValidate, showError } from "~/app/helpers"
import { StyledButton } from "~/app/components/nextui/button"
import { client } from "~/app/utils/client"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import CustomModal from "~/app/components/common/Modal"

const Register = () => {
    const router = useRouter()
    const [modal, setModal] = useState<{ isOpen: boolean, email?: any }>({ isOpen: false })
    const [formError, setFormError] = useState<{
        email?: string
        name?: string
        password?: string
        confirm?: string,
        gender?: string
    }>()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = Object.fromEntries([...new FormData(e.target)])
        const validateResult = await handleValidate(formData, {
            email: string()
                .required("Please enter your email")
                .email("Please enter a valid email"),
            name: string().required("Please enter your name"),
            password: string()
                .min(6, "Password must have a minimum of 6 characters")
                .required("Please enter your password"),
            confirm: string()
                .required("Please enter your password")
                .test("confirm-password", "Password incorrect", (value) => {
                    return value == formData.password
                }),
            gender: string().required("Please select your gender")
                .test("check-gender", "Invalid gender", value => {
                    return ['male', 'female', 'other'].includes(value)
                })
        })
        if(!validateResult.isValid) return setFormError(validateResult.errors)
        setFormError({})
        // Call api
        const { response, data } = await client.post("/auth/register", formData)
        if(!response.ok) {
            setFormError(data.errors)
            return showError(data.errors)
        }
        toast.success("Registered successfully")
        setModal({ isOpen: true, email: formData.email})
        e.target.reset()
    }

    return (
        <>
            <div
                className="fixed top-1/2 left-1/2 max-w-[500px] w-[90%] bg-gray-950 p-5 rounded-xl
                -translate-x-1/2 -translate-y-1/2 text-gray-300"
            >
                <CustomModal 
                    isOpen={modal.isOpen} 
                    onClose={() => setModal({ isOpen: false })}
                    title="Registered successfully ✅" 
                    content={<p>
                        We sent instructions to verify your account to 
                        <b> {modal.email}</b>, please check both your inbox and
                        spam folder.
                    </p>}
                />
                <h3 className="text-white text-lg font-medium text-center">
                    Create an account
                </h3>
                <form
                    action=""
                    className="mt-5 flex flex-col"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label
                            htmlFor="register-email"
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
                            type="text"
                            name="email"
                            id="register-email"
                            className="h-9 px-3 rounded bg-gray-800"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="register-name"
                            className="font-medium text-sm"
                        >
                            Display name{" "}
                            {formError?.name && (
                                <span className="text-red-500">
                                    - {formError.name}
                                </span>
                            )}
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="register-name"
                            className="h-9 px-3 rounded bg-gray-800"
                            placeholder="Enter your name..."
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="register-password"
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
                            name="password"
                            id="register-password"
                            className="h-9 px-3 rounded bg-gray-800"
                            placeholder="Enter your password..."
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label
                            htmlFor="register-confirm"
                            className="font-medium text-sm"
                        >
                            Confirm password{" "}
                            {formError?.confirm && (
                                <span className="text-red-500">
                                    - {formError.confirm}
                                </span>
                            )}
                        </label>
                        <input
                            type="password"
                            name="confirm"
                            id="register-confirm"
                            className="h-9 px-3 rounded bg-gray-800"
                            placeholder="Confirm your password..."
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <label className="font-medium text-sm">
                            Gender{" "}
                            {formError?.gender && (
                                <span className="text-red-500">
                                    - {formError.gender}
                                </span>
                            )}
                        </label>
                        <RadioGroup
                            orientation="horizontal"
                            defaultValue="male"
                            name="gender"
                        >
                            <Radio value="male">
                                <span className="text-white text-sm">Male</span>
                            </Radio>
                            <Radio value="female">
                                <span className="text-white text-sm">
                                    Female
                                </span>
                            </Radio>
                            <Radio value="other">
                                <span className="text-white text-sm">
                                    Other
                                </span>
                            </Radio>
                        </RadioGroup>
                    </div>
                    <StyledButton
                        size="md"
                        color="primary"
                        type="submit"
                        className="mt-5"
                    >
                        Continue
                    </StyledButton>
                    <div className="text-sm mt-1">
                        Already have an account?
                        <Link
                            href="/login"
                            className="text-blue-500 hover:text-blue-400 cursor-pointer transition"
                            scroll={false}
                        >
                            {" "}
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register
