"use client"
/* NextUI Components */
import { Tooltip } from "@nextui-org/react"

/* Icons */
import { FaHashtag } from "react-icons/fa"
import { MdInbox } from "react-icons/md"
import { IoMdNotifications, IoIosSearch } from "react-icons/io"
import { IoPeople } from "react-icons/io5"
import { BsFillPinAngleFill } from "react-icons/bs"
import { FaCircleQuestion } from "react-icons/fa6"
import { useState } from "react"
import clsx from "clsx"

const TextChannelTopBar = ({ name, server }: { name: string, server: string }) => {
    const [search, setSearch] = useState<boolean>(false)

    return (
        <>
            <div className="flex items-center justify-between h-[50px] w-full py-3 px-4 bg-dark-500 border-b-2 border-dark-800 select-none">
                <div className="flex gap-2 items-center text-gray-200">
                    <FaHashtag />
                    { name }
                </div>
                <div className="flex items-center gap-4 text-2xl text-gray-200 [&>*:not(.search)]:cursor-pointer">
                    <Tooltip content="Notifications" placement="bottom">
                        <div>
                            <IoMdNotifications />
                        </div>
                    </Tooltip>
                    <Tooltip content="Pinned Messages" placement="bottom">
                        <div>
                            <BsFillPinAngleFill />
                        </div>
                    </Tooltip>
                    <Tooltip content="Member List" placement="bottom">
                        <div>
                            <IoPeople />
                        </div>
                    </Tooltip>
                    <div className={clsx("search h-6 rounded flex items-center bg-dark-800 overflow-hidden transition-width",
                    search ? "w-60" : "w-32")}>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-full bg-dark-800 text-gray-200 text-sm px-2 outline-none"
                            onFocus={() => setSearch(true)}
                            onBlur={() => setSearch(false)}
                        />
                        <IoIosSearch className="w-7 text-lg"/>
                    </div>
                    <Tooltip content="Inbox" placement="bottom">
                        <div>
                            <MdInbox />
                        </div>
                    </Tooltip>
                    <Tooltip content="Help" placement="bottom">
                        <div>
                            <FaCircleQuestion />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default TextChannelTopBar
