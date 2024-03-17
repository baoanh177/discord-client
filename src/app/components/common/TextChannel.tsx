import TextChannelTopBar from "../layouts/TextChannelTopBar"
import ChatBox from "./ChatBox"

const TextChannel = () => {
    return (
        <>
            <TextChannelTopBar name="general" server="1" />
            <div className="h-full w-full">
                <ChatBox serverName="test" />
            </div>
        </>
    )
}

export default TextChannel
