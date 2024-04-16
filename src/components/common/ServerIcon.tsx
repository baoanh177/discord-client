import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import ServerStatus from "./ServerStatus"
import { Tooltip } from "@nextui-org/react"

const ServerIcon = ({
    id,
    name,
    image,
    status,
    serverStatus,
    isActive,
    server,
}: {
    id: string
    name: string
    image?: StaticImageData
    status: boolean
    serverStatus?: "voice" | "screen" | null
    isActive?: boolean
    server: string
}) => {
    return (
        <>
            <Tooltip content={name} placement="right" color="default" closeDelay={100}>
                <div className="w-16 h-14 flex items-center justify-center relative select-none">
                    {serverStatus && (
                        <ServerStatus status={serverStatus} isActive={isActive} />
                    )}
                    {id == server && (
                        <div className="h-10 w-1 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-xl"></div>
                    )}
                    <Link
                        href={`/channels/${id}`}
                        className={clsx(
                            `flex items-center justify-center w-11 h-11 hover:rounded-xl cursor-pointer overflow-hidden 
                    transition-roundedAndColors `,
                            "[&+.tooltip]:hover:visible [&+.tooltip]:hover:opacity-100",
                            !image && "hover:bg-blue-700",
                            id == server
                                ? "rounded-xl bg-blue-700"
                                : "rounded-[50%] bg-gray-700"
                        )}
                        scroll={false}
                    >
                        {image ? (
                            <Image src={image} alt="" priority />
                        ) : (
                            <span className="text-white font-medium text-sm">
                                {name
                                    .split(" ")
                                    .slice(0, 3)
                                    .map((t) => t.at(0))
                                    .join("")
                                    .toUpperCase()}
                            </span>
                        )}
                    </Link>
                </div>
            </Tooltip>
        </>
    )
}

export default ServerIcon
