import { icons } from "~/assets/icons"
import { FaPlus } from "react-icons/fa6"
import MenuItem from "../common/MenuItem"
import MessageItem from "~/app/components/common/MessageItem"
import Link from "next/link"
import { Tooltip } from "@nextui-org/react"
import MeItemOnSidebar from "../common/MeItemOnSidebar"

const menuItems = [
    {
        title: "Friends",
        image: icons.friends,
        path: "/channels/me",
        isActive: true,
    },
    { title: "Nitro", image: icons.nitro, path: "/channels/nitro" }
]

const MessageBar = ({ server }: { server: string }) => {
    return (
        <>
            <div className="relative w-5/6 sm:w-60 h-full bg-dark-700">
                <div className="h-[50px] border-b-2 border-dark-800 flex items-center px-3">
                    <input
                        type="text"
                        placeholder="Find or start a conversation"
                        className="w-full h-7 outline-none bg-dark-800 rounded px-2 placeholder:text-sm"
                    />
                </div>
                <div className="flex flex-col gap-1 text-white mt-3 px-2">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            {...item}
                            isActive={server == item.path.split("/").at(2)}
                        />
                    ))}
                </div>
                <div className="mt-5">
                    <div className="flex justify-between px-4 text-white">
                        <div className="uppercase text-xs">Direct Message</div>
                        <Tooltip content="Create DM" closeDelay={100}>
                            <FaPlus className="hover cursor-pointer" />
                        </Tooltip>
                    </div>
                    <Link
                        href="#"
                        className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10"
                    >
                        <MessageItem name="baodg." type="desktop" />
                    </Link>
                    <Link
                        href="#"
                        className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10"
                    >
                        <MessageItem name="baodg." type="desktop" />
                    </Link>
                    <Link
                        href="#"
                        className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10"
                    >
                        <MessageItem name="baodg." type="desktop" />
                    </Link>
                    <Link
                        href="#"
                        className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10"
                    >
                        <MessageItem name="baodg." type="desktop" />
                    </Link>
                </div>
                <MeItemOnSidebar name="Bao Anh" />
            </div>
        </>
    )
}

export default MessageBar
