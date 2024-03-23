import Image from "next/image"

const DetailImage = ({ detailImage, setDetailImage }: { detailImage: string, setDetailImage: Function }) => {
    return <>
        <div 
            className="fixed inset-0 flex items-center justify-center z-40"
            onClick={() => setDetailImage("")}
        >
            <div className="bg-black bg-opacity-35 absolute inset-0"></div>
            <Image
                src={detailImage}
                alt=""
                priority
                className="w-[80%] h-[80%] z-10 object-contain"
            />
        </div>
    </>
}

export default DetailImage