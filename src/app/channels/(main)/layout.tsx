import { ReactNode } from "react"
import MessageBar from "../../components/layouts/MessageBar"
import SideBar from "../../components/layouts/Sidebar"

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return <>
        <SideBar server="me"/>
        <main className="fixed flex inset-0 pl-16 -z-10">
            <MessageBar server="me" />
            {children}
        </main>
    </>
}

export default HomeLayout