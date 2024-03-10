import Image from "next/image"
import { images } from "~/assets/images"

const ThirdFeature = () => {
    return (
        <>
            <div
                className="flex-col gap-4 flex items-center justify-evenly py-12 px-4 md:flex-row md:py-20"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="50"
            >
                <div className="">
                    <Image src={images.homeDesc03} alt="" priority />
                </div>
                <div className="max-w-[400px]">
                    <h2 className="text-2xl md:text-5xl font-bold">
                        From few to a fandom
                    </h2>
                    <p className="mt-7 text-lg">
                        Get any community running with moderation tools and
                        custom member access. Give members special powers, set
                        up private channels, and more.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ThirdFeature
