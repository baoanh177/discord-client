import clsx from "clsx"
import { IoVolumeHighSharp } from "react-icons/io5"
import { MdScreenShare } from "react-icons/md"

const ServerStatus = ({ status, isActive }: { status: "voice" | "screen", isActive?: boolean }) => {
    return (
        <>
            <div 
                className={clsx(`absolute flex items-center justify-center top-[2px] right-[2px] w-[24px] h-[24px] 
                border-4 border-gray-950 rounded-[50%]`, isActive ? "bg-green-700" : "bg-gray-700")}>
                {status == "voice" ? (
                    <IoVolumeHighSharp className="text-white text-xs" />
                ) : (
                    <MdScreenShare className="text-white text-xs" />
                )}
            </div>
        </>
    )
}

export default ServerStatus
