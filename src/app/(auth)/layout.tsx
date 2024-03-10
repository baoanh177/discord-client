import Image from "next/image"
import { images } from "~/assets/images"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <>
        <div>
            <Image
                src={images.authBg}
                alt=""
                priority
                className="fixed inset-0 -z-10 select-none h-full w-full"
            />
            { children }
        </div>
    </>
}

export default AuthLayout