import { icons } from "~/assets/icons"
import { FaPlus } from "react-icons/fa6"
import MenuItem from "../common/MenuItem"
import MessageItem from "~/app/components/common/MessageItem"
import Link from "next/link"
import { Tooltip } from "@nextui-org/react"
import UserIcon from "../common/UserIcon"
import { IoMdSettings } from "react-icons/io"
import Image from "next/image"

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
            <div className="relative w-5/6 sm:w-60 h-full bg-[#2b2d31]">
                <div className="h-[50px] border-b-2 border-dark-700 flex items-center px-3">
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
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3 bg-dark-600">
                    <div className="flex items-center gap-2">
                        <UserIcon size="sm" />
                        <div className="text-gray-200">
                            <div className="text-sm">Bao Anh</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={icons.micOff}
                            alt=""
                            className="cursor-pointer"
                        />
                        <Image
                            src={icons.soundOn}
                            alt=""
                            className="cursor-pointer"
                        />
                        <IoMdSettings className="text-2xl text-gray-300 cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageBar
