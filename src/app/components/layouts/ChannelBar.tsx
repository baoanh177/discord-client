"use client"
import { IoIosArrowDown } from "react-icons/io"
import { IoCalendarClearSharp } from "react-icons/io5"
import { useState } from "react"
import ChannelList from "../common/ChannelList"
import MeItemOnSidebar from "../common/MeItemOnSidebar"

const ChannelBar = ({ server }: { server: string }) => {
    const [channelsDropdown, setChannelsDropdown] = useState<{
        text: boolean
        voice: boolean
    }>({ text: true, voice: true })
    
    const handleDropdown = (type: "text" | "voice") => {
        setChannelsDropdown((prev) => ({ ...prev, [type]: !prev[type] }))
    }

    return (
        <>
            <div className="relative h-full bg-dark-700 sm:w-60 select-none">
                <div className="flex justify-between items-center h-[50px] border-b-2 border-dark-800 px-3">
                    <div className="text-sm font-semibold text-gray-200 w-[90%] truncate">
                        Cộng đồng lập trình Việt Nam VN
                    </div>
                    <IoIosArrowDown className="text-xl text-gray-200" />
                </div>
                <div className="relative p-4">
                    <div
                        className="flex items-center gap-1 p-1 px-2 rounded-md bg-white bg-opacity-0 
                        hover:bg-opacity-10 transition-opacity cursor-pointer"
                    >
                        <IoCalendarClearSharp className="text-xl text-gray-400" />
                        <div className="text-gray-400">Events</div>
                    </div>
                    <div className="absolute h-[1px] w-[90%] bg-dark-400 bottom-0 left-1/2 -translate-x-1/2"></div>
                </div>
                <div className="px-2 text-gray-400 flex flex-col mt-4 gap-4">
                    <ChannelList
                        type="text"
                        channels={[
                            { id: "12", type: "text", name: "Text channel 01", server },
                            { id: "212", type: "text", name: "Text channel 01", server },
                        ]}
                        channelsDropdown={channelsDropdown}
                        handleDropdown={handleDropdown}
                    />
                    <ChannelList
                        type="voice"
                        channels={[
                            {
                                id: "132",
                                type: "voice",
                                name: "Voice channel 01",
                                server
                            },
                        ]}
                        channelsDropdown={channelsDropdown}
                        handleDropdown={handleDropdown}
                    />
                </div>
                <MeItemOnSidebar name="Bao Anh" />
            </div>
        </>
    )
}

export default ChannelBar
