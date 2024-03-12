import clsx from "clsx"
import UserIcon from "./UserIcon"

const MessageItem = ({
    name,
    image,
    sender,
    message,
    time,
    type = "desktop"
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
            <div className="relative text-gray-300 flex items-center gap-3">
                <div>
                    <UserIcon image={image} size={type == "desktop" ? "sm" : "lg"}/>
                </div>
                <div className="overflow-hidden pr-5">
                    <div className={clsx("font-bold", type == "desktop" && "text-sm")}>{name}</div>
                    {(message && type == "mobile") && (
                        <div className="w-full text-xs truncate">
                            {sender}: {message}
                        </div>
                    )}
                </div>
                {type == "mobile" && <div className="absolute top-1 right-1 text-xs">{time}</div>}
            </div>
        </>
    )
}

export default MessageItem
