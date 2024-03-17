import { FaHashtag } from "react-icons/fa"
import { HiSpeakerWave } from "react-icons/hi2"
import { IoMdPersonAdd, IoMdSettings } from "react-icons/io"
import { BiSolidMessageRounded } from "react-icons/bi"
import { Tooltip } from "@nextui-org/react"
import Link from "next/link"

const ChannelItem = ({ id, type, name, server }: Channel) => {
    return (
        <>
            <Link
                href={`/channels/${server}/${id}`}
                className="flex items-center gap-1 py-1 px-3 bg-white rounded bg-opacity-0 
                hover:bg-opacity-10 transition-opacity cursor-pointer [&>.options]:hover:flex"
            >
                <div className="flex items-center gap-1 truncate hover:text-white">
                    <div className="text-lg">
                        {type == "text" ? (
                            <FaHashtag />
                        ) : (
                            <HiSpeakerWave />
                        )}
                    </div>
                    <div className="text-sm truncate">
                        {name}
                    </div>
                </div>
                <div className="options hidden items-center gap-1 ml-auto">
                    {type == "voice" && (
                        <Tooltip content="Open Chat" closeDelay={100}>
                            <div><BiSolidMessageRounded className="hover:text-white" /></div>
                        </Tooltip>
                    )}
                    <Tooltip content="Create Invite" closeDelay={100}>
                        <div><IoMdPersonAdd className="hover:text-white" /></div>
                    </Tooltip>
                    <Tooltip content="Edit channel" closeDelay={100}>
                        <div><IoMdSettings className="hover:text-white" /></div>
                    </Tooltip>
                </div>
            </Link>
        </>
    )
}

export default ChannelItem
