"use client"

const StartPage = ({ params }: {params: { server: string }}) => {
    const { server } = params

    return <>
        <div className="grow flex items-center justify-center bg-dark-500 text-white">Choose channel</div>
    </>
}

export default StartPage
