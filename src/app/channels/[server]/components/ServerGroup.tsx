// Tạm bỏ

const ServerGroup = () => {
    return <>
        <div className="w-16 h-16 flex items-center justify-center relative">
            {/* <div className="h-10 w-1 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-xl"></div> */}
            <div
                className="relative flex items-center justify-center w-11 h-11 rounded-xl transition-all 
                cursor-pointer bg-blue-500 bg-opacity-30 p-1"
            >
                <div className="flex items-center justify-start flex-wrap gap-1">
                    <div className="w-[14px] h-[14px] bg-gray-600 rounded-[50%]"></div>
                    <div className="w-[14px] h-[14px] bg-gray-600 rounded-[50%]"></div>
                </div>
            </div>
        </div>
    </>
}

export default ServerGroup