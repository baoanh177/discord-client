import { ReactNode } from "react"

const OuterMainLayout = ({ children }: { children: ReactNode }) => {
    return <>
        {children}
    </>
}

export default OuterMainLayout