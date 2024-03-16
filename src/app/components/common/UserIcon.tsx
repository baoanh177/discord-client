import clsx from "clsx"
import Image from "next/image"
import { images } from "~/assets/images"

const UserIcon = ({
    image,
    isOnline,
    size = "md",
}: {
    image?: any
    isOnline?: boolean
    size?: "sm" | "md" | "lg"
}) => {
    return (
        <>
            <div
                className={clsx(
                    "relative rounded-[50%] bg-green-600",
                    size == "md"
                        ? "w-10 h-10"
                        : size == "lg"
                        ? "w-12 h-12"
                        : "w-8 h-8"
                )}
            >
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-[50%]">
                    {image ? (
                        <Image src={image} alt="" className="w-full h-full" />
                    ) : (
                        <Image
                            src={images.logoIcon}
                            alt=""
                            className="w-2/3 h-2/3"
                        />
                    )}
                </div>
                <div
                    className={clsx(
                        "absolute bottom-0 right-0 border-[#222] rounded-[50%]",
                        size == "md"
                            ? "w-4 h-4 border-3"
                            : size == "lg"
                            ? "w-5 h-5 border-4"
                            : "w-3 h-3 border-3",
                        isOnline ? "bg-green-500" : "bg-dark-300"
                    )}
                ></div>
            </div>
        </>
    )
}

export default UserIcon
