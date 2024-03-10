import Image from "next/image"
import { images } from "~/assets/images"

const FirstFeature = () => {
    return (
        <>
            <div
                className="flex-col flex items-center justify-evenly py-12 px-4 md:flex-row md:py-20"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
            >
                <div className="">
                    <Image src={images.homeDesc01} alt="" priority />
                </div>
                <div className="max-w-[400px]">
                    <h2 className="text-2xl md:text-5xl font-bold">
                        Create an invite-only place where you belong
                    </h2>
                    <p className="mt-7 text-lg">
                        Discord servers are organized into topic-based channels
                        where you can collaborate, share, and just talk about
                        your day without clogging up a group chat.
                    </p>
                </div>
            </div>
        </>
    )
}

export default FirstFeature
