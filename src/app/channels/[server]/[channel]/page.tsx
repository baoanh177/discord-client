import TextChannel from "~/components/layouts/TextChannel"
import VoiceChannel from "~/components/layouts/VoiceChannel"

const ChannelPage = ({ params }: { params: { channel: string } }) => {
    const { channel } = params
    const isTextChannel = true
    return <>
        <div className="grow">
            { isTextChannel ? <TextChannel /> : <VoiceChannel /> }
        </div>
    </>
}

export default ChannelPage