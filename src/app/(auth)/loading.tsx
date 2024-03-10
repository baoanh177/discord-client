import { CircularProgress } from "@nextui-org/react"

const Loading = () => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition">
                <CircularProgress size="lg" aria-label="Loading..." />
            </div>
        </>
    )
}

export default Loading
