import Image from "next/image"
import { icons } from "~/assets/icons"
import UserIcon from "./UserIcon"
import { IoMdSettings } from "react-icons/io"

const MeItemOnSidebar = ({ name }: { name: string }) => {
    return <>
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3 bg-dark-600">
            <div className="flex items-center gap-2">
                <UserIcon size="sm" status="online"/>
                <div className="text-gray-200">
                    <div className="text-sm">{name}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Image
                    src={icons.micOff}
                    alt=""
                    className="cursor-pointer"
                />
                <Image
                    src={icons.soundOn}
                    alt=""
                    className="cursor-pointer"
                />
                <IoMdSettings className="text-2xl text-gray-300 cursor-pointer" />
            </div>
        </div>
    </>
}

export default MeItemOnSidebar