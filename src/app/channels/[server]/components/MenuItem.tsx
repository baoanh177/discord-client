import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

const MenuItem = ({ title, image, path, isActive }: { title: string, image: StaticImageData, path: string, isActive?: boolean }) => {
    return <>
        <Link 
            href={path}
            className={clsx(`flex items-center gap-3 py-2 px-5 bg-white text-white 
            rounded-md transition-colors cursor-pointer`,
            isActive ? "bg-opacity-10" : "bg-opacity-0 hover:bg-opacity-5")}>
            <Image src={image} alt="" className="w-6"/>
            <span>{ title }</span>
        </Link>
    </>
}

export default MenuItem