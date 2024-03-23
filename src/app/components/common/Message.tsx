"use client"
import Image from "next/image"
import UserIcon from "./UserIcon"

const Message = ({
    sender,
    content,
    image,
    replyId,
    time,
    setDetailImage
}: {
    sender: string
    content: string
    image?: string
    replyId?: string
    time: string
    setDetailImage: Function
}) => {
    return (
        <>
            <div className="flex flex-col gap-1">
                {replyId && (
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-3 rounded-tl-md border-t-2 border-l-2 border-dark-400 translate-y-1/4 ml-5 shrink-0"></div>
                        <div className="flex items-center gap-1">
                            <UserIcon size="xs" />
                            <div className="flex truncate text-xs text-gray-500 gap-1">
                                <span className="font-semibold text-gray-400">
                                    @Anh_Quan
                                </span>{" "}
                                <span className="truncate"> Hi mọi người, đây là server discord được tạo ra
                                với mục đích hỗ trợ mọi người trong quá trình
                                học.</span>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex gap-4">
                    <UserIcon />
                    <div className="flex flex-col justify-center">
                        <div className="flex items-baseline gap-2">
                            <div className="text-sm text-gray-100">
                                {sender}
                            </div>
                            <div className="text-xs text-gray-400">{time}</div>
                        </div>
                        <div className="text-sm text-gray-300">{content}</div>
                        {image && (
                            <div 
                                className="max-w-[65%] overflow-hidden rounded-lg mt-3 cursor-pointer"
                                onClick={() => setDetailImage(image)}
                            >
                                <Image src={image} alt="" priority />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message
