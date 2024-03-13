import Image from "next/image"
import { StyledButton } from "~/app/components/nextui/button"
import { images } from "~/assets/images"
import { MdOutlineFileDownload } from "react-icons/md"

const FourthFeature = () => {
    return (
        <>
            <div className="py-12 px-5 md:py-20 bg-gray-50">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                >
                    <div className="text-center max-w-[1000px] mx-auto">
                        <h2 className="text-2xl font-extrabold md:font-black md:text-5xl">
                            RELIABLE TECH FOR STAYING CLOSE
                        </h2>
                        <p className="mt-4">
                            Low-latency voice and video feels like you’re in the
                            same room. Wave hello over video, watch friends
                            stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                    <figure className="flex justify-center">
                        <Image
                            src={images.homeDesc04}
                            alt=""
                            priority
                            className="md:w-3/4"
                        />
                    </figure>
                </div>
                <div
                    className="relative max-w-[1000px] mx-auto flex flex-col items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="50"
                >
                    <h3 className="text-2xl font-bold md:text-4xl text-center py-8">
                        Ready to start your journey?
                    </h3>
                    <Image
                        src={images.homeFeatureBg}
                        alt=""
                        className="absolute inset-0 w-full"
                    />
                    <StyledButton
                        size="xl"
                        radius="full"
                        color="primary"
                        startContent={
                            <MdOutlineFileDownload className="text-3xl text-white" />
                        }
                    >
                        Download for Windows
                    </StyledButton>
                </div>
            </div>
        </>
    )
}

export default FourthFeature
