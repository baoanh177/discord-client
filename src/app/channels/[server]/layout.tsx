import { ReactNode } from "react"
import SideBar from "~/components/layouts/Sidebar"
import ChannelBar from "~/components/layouts/ChannelBar"

const MainLayout = ({ children, params }: { children: ReactNode, params: { server: string } }) => {
    const { server } = params
    return <>
        <SideBar server={server} />
        <main className="fixed flex inset-0 pl-16 -z-10">
            <ChannelBar server={server} />
            {children}
        </main>
    </>
}

export default MainLayout