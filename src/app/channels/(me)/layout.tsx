import MessageBar from "../../components/layouts/MessageBar"
import SideBar from "../../components/layouts/Sidebar"

const MeLayout = () => {
    return <>
        <SideBar server="me"/>
        <main className="fixed inset-0 pl-16">
            <MessageBar server="me" />
        </main>
    </>
}

export default MeLayout