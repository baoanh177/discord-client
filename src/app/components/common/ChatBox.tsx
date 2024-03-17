"use client"
import Image from "next/image"
import { images } from "~/assets/images"

/* Icons */
import { FaFileArrowUp } from "react-icons/fa6"
import { BiSolidGift } from "react-icons/bi"
import { MdGifBox, MdEmojiEmotions } from "react-icons/md"
import { LuSticker } from "react-icons/lu"
import { User } from "@nextui-org/react"
import UserIcon from "./UserIcon"
import Message from "./Message"
import { useState } from "react"

const ChatBox = ({ serverName }: { serverName: string }) => {
    const [detailImage, setDetailImage] = useState<string>()

    return (
        <>
            <div className="relative bg-dark-500 h-full w-full p-5">
                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={images.textChannelBg}
                        alt=""
                        priority
                        className="-translate-y-1/3 w-1/4"
                    />
                </div> */}

                {detailImage && (
                    <div 
                        className="fixed inset-0 flex items-center justify-center z-40"
                        onClick={() => setDetailImage("")}
                    >
                        <div className="bg-black bg-opacity-35 absolute inset-0"></div>
                        <Image
                            src={detailImage}
                            alt=""
                            priority
                            className="w-[90%] h-[90%] z-10 object-contain"
                        />
                    </div>
                )}

                {/* Message Box */}
                <div className="flex flex-col h-full z-20 overflow-y-scroll no-scroll pb-32">
                    <div className="py-10">
                        <div className="text-3xl text-center text-gray-200 font-semibold">
                            Welcome to <div>{serverName}</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Message
                            sender="Anh_Quan"
                            content="Hi mọi người, đây là server discord được tạo ra với mục đích hỗ trợ mọi người trong quá trình học."
                            time="17/03/2024 22:48"
                            setDetailImage={setDetailImage}
                        />
                        <Message
                            sender="Bao Anh"
                            content="Ok a"
                            replyId="1"
                            time="17/03/2024 22:48"
                            setDetailImage={setDetailImage}
                        />
                        <Message
                            sender="Bao Anh"
                            image={images.authBg}
                            content=""
                            time="17/03/2024 22:48"
                            setDetailImage={setDetailImage}
                        />
                        <Message
                            sender="Bao Anh"
                            image={images.heroCenter}
                            content=""
                            time="17/03/2024 22:48"
                            setDetailImage={setDetailImage}
                        />
                    </div>
                </div>
                {/* Chat Input */}
                <div className="pb-8 absolute left-0 bottom-[50px] right-0 flex justify-center bg-dark-500">
                    <div className="h-11 w-[96%] rounded-md bg-white bg-opacity-5 flex items-center text-gray-300 px-5">
                        <FaFileArrowUp className="text-xl hover:text-white cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Message"
                            className="h-full w-full px-4 outline-none bg-transparent"
                        />
                        <div className="flex items-center gap-3 text-2xl [&>*]:cursor-pointer">
                            <BiSolidGift className="hover:text-white" />
                            <LuSticker className="hover:text-white" />
                            <MdGifBox className="hover:text-white" />
                            <MdEmojiEmotions className="hover:text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox
