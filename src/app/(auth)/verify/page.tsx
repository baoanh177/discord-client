"use client"
import { notFound, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { client } from "~/app/utils/client"
import Loading from "../loading"
import CustomModal from "~/app/components/common/Modal"

const VerifyPage = () => {
    const searchParams = useSearchParams()
    const [loading, setLoading] = useState<boolean>(true)
    const [isValidVerifyCode, setValidVerifyCode] = useState<boolean>(false)

    const verifyCode = searchParams.get("code")

    if (!verifyCode) return notFound()

    useEffect(() => {
        client
            .post("/auth/verify", { verifyCode })
            .then(({ response, data }) => {
                setValidVerifyCode(response.ok)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading />
    if (!isValidVerifyCode) return notFound()

    return <CustomModal 
        title="Your account has been verified 🎉" 
        content="Congratulation! Your account has been verify successfully. 
            Now you can log in and experience our exciting services" 
        isOpen={true}
        redirectPath="/login"
        redirectContent="Let's start"
    />
}

export default VerifyPage
