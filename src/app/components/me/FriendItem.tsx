import { BiSolidMessageRounded } from "react-icons/bi"
import { FiMoreVertical } from "react-icons/fi"
import UserIcon from "~/app/components/common/UserIcon"
import { Tooltip } from "@nextui-org/react"

const FriendItem = ({ name, isOnline, image }: { name: string, isOnline: boolean, image?: any }) => {
    return (
        <>
            <div className="w-[96%] mx-auto h-[.1px] bg-green-100 bg-opacity-10"></div>
            <div
                className="flex items-center justify-between p-2 rounded-lg cursor-pointer
                bg-green-100 bg-opacity-0 hover:bg-opacity-10"
            >
                <div className="flex items-center gap-3">
                    <UserIcon size="sm" image={image} isOnline={isOnline}/>
                    <div className="text-gray-200">
                        <div className="text-sm">{name}</div>
                        <div className="text-xs">{ isOnline ? "Online" : "Offline" }</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Tooltip content="Message" closeDelay={100}>
                        <div className="flex items-center justify-center w-7 h-7 rounded-[50%] bg-dark-600">
                            <BiSolidMessageRounded className="text-xl text-gray-400" />
                        </div>
                    </Tooltip>
                    <Tooltip content="More" closeDelay={100}>
                        <div className="flex items-center justify-center w-7 h-7 rounded-[50%] bg-dark-600">
                            <FiMoreVertical className="text-xl text-gray-400" />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}

export default FriendItem
