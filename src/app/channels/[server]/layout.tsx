import { ReactNode } from "react"
import SideBar from "../../components/layouts/Sidebar"
import ChannelBar from "~/app/components/layouts/ChannelBar"

const MainLayout = ({ children, params }: { children: ReactNode, params: { server: string } }) => {
    const { server } = params
    return <>
        <SideBar server={server} />
        <main className="fixed inset-0 pl-16">
            <ChannelBar />
            {children}
        </main>
    </>
}

export default MainLayout