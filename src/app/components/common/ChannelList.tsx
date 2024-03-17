"use client"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"
import { FaPlus } from "react-icons/fa6"
import { Tooltip } from "@nextui-org/react"
import ChannelItem from "./ChannelItem"

const ChannelList = ({
    type = "text",
    channels = [],
    channelsDropdown,
    handleDropdown,
}: {
    type: "text" | "voice"
    channels: Channel[]
    channelsDropdown: { text: boolean; voice: boolean }
    handleDropdown: Function
}) => {

    return (
        <>
            <div>
                <div className="flex items-center">
                    <div
                        className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                        onClick={() => handleDropdown(type)}
                    >
                        {channelsDropdown[type] ? (
                            <FaChevronDown />
                        ) : (
                            <FaChevronRight />
                        )}
                        <div className="text-xs">
                            {`${
                                type.charAt(0).toUpperCase() + type.slice(1)
                            } channels`.toUpperCase()}
                        </div>
                    </div>
                    <Tooltip content="Create a channel" closeDelay={100}>
                        <div className="ml-auto hover:text-white transition-colors cursor-pointer">
                            <FaPlus />
                        </div>
                    </Tooltip>
                </div>
                {channelsDropdown[type] && (
                    <div className="flex flex-col px-2 mt-1">
                        {channels.map((c) => (
                            <ChannelItem key={c.id} {...c}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default ChannelList
