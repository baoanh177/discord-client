const Loading = ({ opacity = 100 }: { opacity?: number }) => {
    return (
        <>
            <div
                className={`bg-[#36393f] fixed inset-0 flex items-center 
                justify-center bg-opacity-${opacity} z-50`}
            >
                <span className="cubesWrapper">
                    <span className="cube"></span>
                    <span className="cube"></span>
                </span>
            </div>
        </>
    )
}

export default Loading
