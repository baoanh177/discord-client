import { ReactNode } from "react"
import SideBar from "./Sidebar"

const MainLayout = ({ children, params }: { children: ReactNode, params: { server: string } }) => {
    const { server } = params
    return <>
        <SideBar server={server} />
        <main className="pl-16">
            {children}
        </main>
    </>
}

export default MainLayout