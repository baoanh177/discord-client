"use client"
import { images } from "~/assets/images"
import Image from "next/image"
import { StyledButton } from "~/components/nextui/button"
import { MdOutlineFileDownload } from "react-icons/md"

const Hero = () => {
    return (
        <>
            <div className="relative h-[670px] bg-[#404eed] pb-20">
                <div className="absolute bottom-0 left-0 -translate-x-1/4 z-10">
                    <Image src={images.heroLeft} alt="" priority/>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <Image src={images.heroCenter} alt="" priority/>
                </div>
                <div className="hidden lg:block absolute bottom-0 right-0 translate-x-1/4 z-10">
                    <Image src={images.heroRight} alt="" priority/>
                </div>
                <div className="w-full px-2 h-full flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-7xl font-black text-white italic">
                        imagine a place...
                    </div>
                    <p className="max-w-[700px] text-center my-10 font-medium text-white z-20">
                        ...where you can belong to a school club, a gaming
                        group, or a worldwide art community. Where just you and
                        a handful of friends can spend time together. A place
                        that makes it easy to talk every day and hang out more
                        often.
                    </p>
                    <div className="flex flex-col items-center gap-5 z-20 md:flex-row ">
                        <StyledButton
                            size="xl"
                            radius="full"
                            color="light"
                            startContent={<MdOutlineFileDownload className="text-3xl" />}
                        >
                            Download for Windows
                        </StyledButton>
                        <StyledButton size="xl" radius="full" color="dark">
                            Open Discord in your browser
                        </StyledButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
