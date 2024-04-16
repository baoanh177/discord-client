import { ReactNode } from "react"
import TopBar from "~/components/me/TopBar"

const StartLayout = ({ children }: { children: ReactNode }) => {
    return <>
        <div className="grow">
            <TopBar />
            { children }
        </div>
    </>
}

export default StartLayout