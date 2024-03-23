import { images } from "~/assets/images"
import UserItemInVoiceChannel from "./UserItemInVoiceChannel"
import VoiceChannelLayout from "./VoiceChannelLayout"

const VoiceChannel = () => {
    return (
        <>
            <VoiceChannelLayout>
                <div className="w-full h-full grid grid-cols-2 justify-center gap-3 select-none">
                    <UserItemInVoiceChannel name="Saiduii" image={images.user1} isTalking={true}/>
                    <UserItemInVoiceChannel name="Tú" image={images.user2} status="mic-off"/>
                    <UserItemInVoiceChannel name="Bao Anh" image={images.heroLeft} status="mic-off"/>
                    <UserItemInVoiceChannel name="countduck" isTalking={true}/>
                </div>
            </VoiceChannelLayout>
        </>
    )
}

export default VoiceChannel
