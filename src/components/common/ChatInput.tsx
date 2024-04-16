import clsx from "clsx"
import { BiSolidGift } from "react-icons/bi"
import { FaFileArrowUp } from "react-icons/fa6"
import { LuSticker } from "react-icons/lu"
import { MdEmojiEmotions, MdGifBox } from "react-icons/md"

const ChatInput = ({ size = "md" }: { size?: "md" | "lg" }) => {
    return <>
        <div 
            className={clsx("flex justify-center bg-dark-500 shrink-0",
            size == "lg" ? "pb-14 pr-3" : "mx-auto p-3 w-full")}
        >
            <div className="h-11 w-[98%] rounded-md bg-white bg-opacity-5 flex items-center text-gray-300 px-5">
                <FaFileArrowUp className="text-xl hover:text-white cursor-pointer" />
                <input
                    type="text"
                    placeholder="Message"
                    className="h-full w-full px-4 outline-none bg-transparent"
                />
                <div className="flex items-center gap-3 text-2xl [&>*]:cursor-pointer">
                    { size == "lg" && <>
                        <BiSolidGift className="hover:text-white" />
                        <LuSticker className="hover:text-white" />
                        <MdGifBox className="hover:text-white" />
                    </>}
                    <MdEmojiEmotions className="hover:text-white" />
                </div>
            </div>
        </div>
    </>
}

export default ChatInput