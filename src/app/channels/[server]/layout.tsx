import { ReactNode } from "react"
import SideBar from "../../components/layouts/Sidebar"

const MainLayout = ({ children, params }: { children: ReactNode, params: { server: string } }) => {
    const { server } = params
    return <>
        <SideBar server={server} />
        <main className="fixed inset-0 pl-16">
            {children}
        </main>
    </>
}

export default MainLayout