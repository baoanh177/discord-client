"use client"
import Me from "../components/Me"

const StartPage = ({ params }: {params: { server: string }}) => {
    const { server } = params

    return <>
        {/* {(server == "me" || server == "nitro" || server == "shop") && <Me server={server}/>} */}
    </>
}

export default StartPage
