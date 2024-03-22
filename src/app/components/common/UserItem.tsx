import clsx from "clsx"
import UserIcon from "./UserIcon"
import { IoIosClose } from "react-icons/io"

const UserItem = ({
    name,
    image,
    status
}: {
    name: string
    image?: any
    status?: "online" | "offline"
}) => {
    return (
        <>
            <div
                className="relative text-gray-300 flex items-center gap-3 bg-white 
                bg-opacity-0 px-2 py-1 rounded-md hover:bg-opacity-10 transition-opacity cursor-pointer"
            >
                <div>
                    <UserIcon
                        image={image}
                        status={status}
                        size="sm"
                    />
                </div>
                <div className="overflow-hidden pr-5">
                    <div
                        className={clsx("font-bold text-sm")}
                    >
                        {name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserItem
