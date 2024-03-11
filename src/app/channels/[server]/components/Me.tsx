import MessageBar from "./MessageBar"

const Me = ({ server }: { server: string }) => {
    return <>
        <MessageBar server={server}/>
    </>
}

export default Me