import clsx from "clsx"
import UserIcon from "./UserIcon"
import { IoIosClose } from "react-icons/io"

const MessageItem = ({
    name,
    image,
    sender,
    message,
    time,
    type = "desktop",
}: {
    name: string
    image?: any
    sender?: string
    message?: string
    time?: string
    type?: "mobile" | "desktop"
}) => {
    return (
        <>
            <div
                className={clsx("relative text-gray-300 flex items-center gap-3",
                type == "desktop" && "[&>.close]:hover:visible")}
            >
                <div>
                    <UserIcon
                        image={image}
                        size={type == "desktop" ? "sm" : "lg"}
                    />
                </div>
                <div className="overflow-hidden pr-5">
                    <div
                        className={clsx("font-bold",
                        type == "desktop" && "text-sm")}
                    >
                        {name}
                    </div>
                    {message && type == "mobile" && (
                        <div className="w-full text-xs truncate">
                            {sender}: {message}
                        </div>
                    )}
                </div>
                {type == "mobile" ? (
                    <div className="absolute top-1 right-0 text-xs">{time}</div>
                ) : (
                    <div
                        className="close invisible absolute right-1 top-1/2 -translate-y-1/2 
                        rounded-[50%] [&>*]:hover:text-white"
                    >
                        <IoIosClose className="text-2xl text-gray-300 transition-colors" />
                    </div>
                )}
            </div>
        </>
    )
}

export default MessageItem
