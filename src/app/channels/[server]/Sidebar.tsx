import Image from "next/image"
import ServerIcon from "./components/ServerIcon"
import { images } from "~/assets/images"
import clsx from "clsx"
import Link from "next/link"

const SideBar = ({ server }: { server: string }) => {
    return (
        <>
            <div className="fixed top-0 left-0 bottom-0 w-16 bg-gray-950 py-4 flex flex-col">
                <div className="w-16 h-16 flex items-center justify-center relative">
                    {server == "me" && (
                        <div className="h-10 w-1 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-xl"></div>
                    )}
                    <Link
                        href="/channels/me"
                        className={clsx(`flex items-center justify-center w-11 h-11 hover:rounded-xl transition-all 
                        cursor-pointer hover:bg-blue-700`, server == "me" ? "rounded-xl bg-blue-700" : "rounded-[50%] bg-gray-700")}
                        scroll={false}
                    >
                        <Image src={images.logoIcon} alt="" priority />
                    </Link>
                </div>
                <div className="h-[2px] w-10 bg-gray-600 rounded-xl mx-auto"></div>
                <ServerIcon id="1" name="Hoc fe" server={server} />
            </div>
        </>
    )
}

export default SideBar
