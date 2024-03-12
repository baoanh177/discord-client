import { icons } from "~/assets/icons"
import { FaPlus } from "react-icons/fa6"
import MenuItem from "./MenuItem"
import MessageItem from "~/app/components/MessageItem"
import Link from "next/link"
import { Tooltip } from "@nextui-org/react"

const menuItems = [
    {
        title: "Friends",
        image: icons.friends,
        path: "/channels/me",
        isActive: true,
    },
    { title: "Nitro", image: icons.nitro, path: "/channels/nitro" },
    { title: "Shop", image: icons.friends, path: "/channels/shop" },
]

const MessageBar = ({ server }: { server: string }) => {
    return (
        <>
            <div className="w-5/6 sm:w-60 h-full bg-[#1a1a1a] p-2">
                <div className="flex flex-col gap-1 text-white">
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
                            <FaPlus className="hover cursor-pointer"/>
                        </Tooltip>
                    </div>
                    <Link href="#" className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10">
                        <MessageItem name="baodg." type="desktop"/>
                    </Link>
                    <Link href="#" className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10">
                        <MessageItem name="baodg." type="desktop"/>
                    </Link>
                    <Link href="#" className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10">
                        <MessageItem name="baodg." type="desktop"/>
                    </Link>
                    <Link href="#" className="block px-4 py-1 mt-2 rounded bg-white bg-opacity-0 cursor-pointer hover:bg-opacity-10">
                        <MessageItem name="baodg." type="desktop"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MessageBar
