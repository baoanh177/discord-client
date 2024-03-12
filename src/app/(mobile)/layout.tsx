import { ReactNode } from "react"

const MobileLayout = ({ children }: { children: ReactNode }) => {
    return <>
        <div className="py-4 px-3">
            { children }
        </div>
    </>
}

export default MobileLayout