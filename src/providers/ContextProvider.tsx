"use client"

import { ReactNode, createContext, useState } from "react"
import Loading from "~/components/common/Loading"

export const GlobalContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [isWebLoading, setWebLoading] = useState<boolean>(false)

    if (isWebLoading) return <Loading />

    return (
        <>
            <GlobalContext.Provider
                value={{ isWebLoading, setWebLoading }}
            >
                {children}
            </GlobalContext.Provider>
        </>
    )
}

export default ContextProvider
