import { BiSolidMessageRounded } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import ChatInput from "../common/ChatInput"
import Message from "../common/Message"
import { useState } from "react"
import DetailImage from "../common/DetailImage"
import { images } from "~/assets/images"

const MessageBarInVoiceChannel = ({
    setMessageBar,
}: {
    setMessageBar: Function
}) => {
    const [detailImage, setDetailImage] = useState<string>("")

    return (
        <>
            <div className="flex flex-col w-[35%] rounded-xl bg-dark-500 shrink-0">
                <div className="flex justify-between px-3 min-h-[50px] items-center text-gray-300 border-b-2 border-dark-700">
                    <div className="flex items-center w-full gap-1">
                        <BiSolidMessageRounded className="text-2xl" />
                        Test 1
                    </div>
                    <IoClose
                        className="text-3xl cursor-pointer hover:text-white"
                        onClick={() => setMessageBar(false)}
                    />
                </div>
                <div className="flex flex-col gap-4 px-4 max-h-full overflow-y-scroll no-scroll">
                    <div className="py-10 text-3xl text-center text-gray-200 font-semibold">
                    Welcome to <div>Test 1</div>
                    </div>
                    <Message
                        sender="Anh_Quan"
                        content="Hi mọi người, đây là server discord được tạo ra với mục đích hỗ trợ mọi người trong quá trình học."
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        content="Ok a"
                        replyId="1"
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        image={images.authBg}
                        content=""
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        image={images.heroCenter}
                        content=""
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Anh_Quan"
                        content="Hi mọi người, đây là server discord được tạo ra với mục đích hỗ trợ mọi người trong quá trình học."
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        content="Ok a"
                        replyId="1"
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        image={images.authBg}
                        content=""
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                    <Message
                        sender="Bao Anh"
                        image={images.heroCenter}
                        content=""
                        time="17/03/2024 22:48"
                        setDetailImage={setDetailImage}
                    />
                </div>
                <ChatInput />
                {detailImage && (
                    <DetailImage
                        detailImage={detailImage}
                        setDetailImage={setDetailImage}
                    />
                )}
            </div>
        </>
    )
}

export default MessageBarInVoiceChannel
