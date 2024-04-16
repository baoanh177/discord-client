"use strict"
"use client"
import { ReactNode, useEffect, useState } from "react"
import { getLocalStorage } from "../../helpers"
import { client } from "../../utils/client"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import Loading from "~/components/common/Loading"

const OuterMainLayout = ({ children }: { children: ReactNode }) => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(true)
    
    // Check auth
    useEffect(() => {
        const { accessToken } = getLocalStorage("accessToken", "refreshToken")
        client.setTokens(accessToken)
        client.post("/auth/check-access")
            .then(({ response }) => {
                if(!response.ok) return router.push("/login")
                setLoading(false)
            })
            .catch(err => {
                toast.error("Something went wrong")
                router.push("/login")
            })
    }, [])

    

    return <>
        { loading && <Loading /> }
        {children}
    </>
}

export default OuterMainLayout