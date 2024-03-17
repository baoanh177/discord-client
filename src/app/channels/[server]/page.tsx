"use client"

const StartPage = ({ params }: {params: { server: string }}) => {
    const { server } = params

    return <>
        <h1>Server: { server }</h1>
    </>
}

export default StartPage
