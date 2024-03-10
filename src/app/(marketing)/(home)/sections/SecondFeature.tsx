import Image from "next/image"
import { images } from "~/assets/images"

const SecondFeature = () => {
    return (
        <>
            <div className="py-12 px-4 md:py-20 bg-gray-50">
                <div
                    className="flex-col-reverse gap-4 flex items-center justify-evenly md:flex-row"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                >
                    <div className="max-w-[400px]">
                        <h2 className="text-2xl md:text-5xl font-bold">
                            Where hanging out is easy
                        </h2>
                        <p className="mt-7 text-lg">
                            Grab a seat in a voice channel when you’re free.
                            Friends in your server can see you’re around and
                            instantly pop in to talk without having to call.
                        </p>
                    </div>
                    <div className="">
                        <Image src={images.homeDesc02} alt="" priority />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondFeature
