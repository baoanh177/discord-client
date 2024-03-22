import Image from "next/image"
import VoiceChannelLayout from "./VoiceChannelLayout"
import { images } from "~/assets/images"
import { BsFillMicMuteFill } from "react-icons/bs"

const VoiceChannel = () => {
    return <>
        <VoiceChannelLayout>
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-3">
                <div 
                    className="relative flex items-center justify-center w-full max-w-[49%] rounded-xl h-full 
                    max-h-[56%] bg-green-600 cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100"
                >
                    <Image src={images.logoIcon} alt="" className="w-12" priority />
                    <div 
                        className="absolute bottom-0 left-0 right-0 flex justify-between 
                        items-center p-3 invisible opacity-0 transition-display"
                    >
                        <div className="py-1 px-3 bg-black bg-opacity-45 rounded-md">Bao Anh</div>
                        <div className="bg-black bg-opacity-45 p-2 rounded-[50%] text-md"><BsFillMicMuteFill /></div>
                    </div>
                </div>
                <div 
                    className="relative flex items-center justify-center w-full max-w-[49%] rounded-xl h-full 
                    max-h-[56%] bg-green-600 cursor-pointer [&>div]:hover:visible [&>div]:hover:opacity-100"
                >
                    <Image src={images.logoIcon} alt="" className="w-12" priority />
                    <div 
                        className="absolute bottom-0 left-0 right-0 flex justify-between 
                        items-center p-3 invisible opacity-0 transition-display"
                    >
                        <div className="py-1 px-3 bg-black bg-opacity-45 rounded-md">countduck</div>
                        <div className="bg-black bg-opacity-45 p-2 rounded-[50%] text-md"><BsFillMicMuteFill /></div>
                    </div>
                </div>
            </div>
        </VoiceChannelLayout>
    </>
}

export default VoiceChannel