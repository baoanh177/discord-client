"use client"
import Image from "next/image"
import { images } from "~/assets/images"

/* Icons */
import { FaFileArrowUp } from "react-icons/fa6"
import { BiSolidGift } from "react-icons/bi"
import { MdGifBox, MdEmojiEmotions } from "react-icons/md"
import { LuSticker } from "react-icons/lu"
import Message from "../common/Message"
import {
    JSXElementConstructor,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from "react"
import ChatInput from "../common/ChatInput"
import DetailImage from "../common/DetailImage"

const ChatBox = ({ serverName }: { serverName: string }) => {
    const [detailImage, setDetailImage] = useState<string>()
    const messagesRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="relative flex flex-col bg-dark-500 h-full shrink-1 w-full pl-3 pb-5">
                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={images.textChannelBg}
                        alt=""
                        priority
                        className="-translate-y-1/3 w-1/4"
                    />
                </div> */}

                {detailImage && (
                    <DetailImage
                        detailImage={detailImage}
                        setDetailImage={setDetailImage}
                    />
                )}

                {/* Message Box */}
                <div className="flex flex-col-reverse h-full z-20 overflow-y-scroll pb-32 pl-2">
                    <div className="flex flex-col gap-5" ref={messagesRef}>
                        <div className="py-10 text-3xl text-center text-gray-200 font-semibold">
                            Welcome to <div>{serverName}</div>
                        </div>
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
                <ChatInput size="lg" />
            </div>
        </>
    )
}

export default ChatBox
