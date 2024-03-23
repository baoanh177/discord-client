import clsx from "clsx"
import Image from "next/image"
import { BsFillMicMuteFill } from "react-icons/bs"
import { MdScreenShare } from "react-icons/md"
import { images } from "~/assets/images"

const colors = ["bg-red-500", "bg-green-500", "bg-gray-500", "bg-yellow-500"]

const UserItemInVoiceChannel = ({
    name,
    image,
    isTalking,
    status,
}: {
    name: string
    image?: any
    isTalking?: boolean
    status?: "mic-off" | "screen-share"
}) => {
    const random = Math.floor(Math.random() * colors.length)

    return (
        <>
            <div
                className={clsx(`relative rounded-xl py-[24%] cursor-pointer 
                [&>div]:hover:visible [&>div]:hover:opacity-100 ${colors[random]}`,
                (isTalking && !status) && "border-2 border-black outline-3 outline-green-600 outline")}
            >
                <div 
                    className={clsx(`absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-24 h-24 rounded-[50%] overflow-hidden`, image && "bg-black bg-opacity-50")}
                >
                    <Image
                        src={image || images.logoIcon}
                        alt=""
                        className={clsx(image ? "w-full h-full" : "w-12")}
                        priority
                    />
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 flex justify-between 
                        items-center p-3 invisible opacity-0 transition-display"
                >
                    <div className="py-1 px-3 bg-black bg-opacity-45 rounded-md">
                        {name}
                    </div>
                    {status && (
                        <div className="bg-black bg-opacity-45 p-2 rounded-[50%] text-md">
                            { status == "mic-off" ? <BsFillMicMuteFill /> : <MdScreenShare /> }
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default UserItemInVoiceChannel
