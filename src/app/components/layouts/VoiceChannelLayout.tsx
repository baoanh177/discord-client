"use client"

import { ReactNode, useState } from "react"

// NextUI Components
import { Tooltip } from "@nextui-org/react"

// Icons
import { HiSpeakerWave } from "react-icons/hi2"
import { BiSolidMessageRounded } from "react-icons/bi"
import { BsSoundwave, BsFillMicMuteFill } from "react-icons/bs"
import { MdEmojiEmotions, MdScreenShare } from "react-icons/md"
import { ImPhoneHangUp } from "react-icons/im"
import { IoOpenOutline, IoVideocamOff, IoRocketSharp } from "react-icons/io5"
import { BsFullscreen } from "react-icons/bs"
import MessageBarInVoiceChannel from "./MessageBarInVoiceChannel"

const VoiceChannelLayout = ({ children }: { children: ReactNode }) => {
    const [messageBar, setMessageBar] = useState<boolean>(false)

    return (
        <>
            <div className="flex w-full h-full bg-dark-600">
                <div className="flex flex-col w-full h-full">
                    <div className="flex justify-between items-center shrink-0 px-5 bg-black h-[50px]">
                        <div className="flex items-center text-gray-200 gap-2">
                            <HiSpeakerWave className="text-xl text-gray-400" />
                            <div>Phòng học 1</div>
                        </div>
                        {!messageBar && (
                            <BiSolidMessageRounded
                                className="text-2xl text-gray-300 hover:text-white cursor-pointer"
                                onClick={() => setMessageBar(true)}
                            />
                        )}
                    </div>
                    <div className="h-full bg-black text-white px-2">
                        {children}
                    </div>
                    <div className="flex justify-between items-center shrink-0 h-20 bg-black px-5">
                        <div className="flex items-center gap-4 text-gray-300 text-2xl [&>*]:cursor-pointer">
                            <BsSoundwave className="hover:text-white" />
                            <MdEmojiEmotions className="hover:text-white" />
                        </div>

                        <div
                            className="flex items-center gap-4 text-2xl text-gray-200 [&>*]:p-4 [&>*]:rounded-[50%]
                    [&>*]:cursor-pointer [&>*]:transition-opacity"
                        >
                            <Tooltip
                                content="Turn On Camera"
                                placement="top"
                                closeDelay={100}
                            >
                                <div className="bg-white bg-opacity-20 hover:bg-opacity-15">
                                    <IoVideocamOff />
                                </div>
                            </Tooltip>
                            <div className="bg-white bg-opacity-20 hover:bg-opacity-15">
                                <IoRocketSharp />
                            </div>
                            <Tooltip
                                content="Share Your Screen"
                                placement="top"
                                closeDelay={100}
                            >
                                <div className="bg-white bg-opacity-20 hover:bg-opacity-15">
                                    <MdScreenShare />
                                </div>
                            </Tooltip>
                            <Tooltip
                                content="Turn On Microphone"
                                placement="top"
                                closeDelay={100}
                            >
                                <div className="bg-white bg-opacity-20 hover:bg-opacity-15">
                                    <BsFillMicMuteFill />
                                </div>
                            </Tooltip>
                            <Tooltip
                                content="Disconnect"
                                placement="top"
                                closeDelay={100}
                            >
                                <div className="bg-red-500 hover:bg-red-600 transition-colors">
                                    <ImPhoneHangUp />
                                </div>
                            </Tooltip>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 text-2xl [&>*]:cursor-pointer">
                            <IoOpenOutline className="hover:text-white" />
                            <BsFullscreen className="text-xl hover:text-white" />
                        </div>
                    </div>
                </div>

                {messageBar && (
                    <MessageBarInVoiceChannel setMessageBar={setMessageBar} />
                )}
            </div>
        </>
    )
}

export default VoiceChannelLayout
