"use client"
import { useState } from "react"
import TextChannelTopBar from "./TextChannelTopBar"
import ChatBox from "./ChatBox"
import MemberList from "./MemberList"

const TextChannel = () => {
    const [memberList, setMemberList] = useState<boolean>(true)

    return (
        <>
            <TextChannelTopBar name="general" server="1" memberList={memberList} setMemberList={setMemberList}/>
            <div className="flex h-full w-full">
                <ChatBox serverName="test"/>
                <MemberList memberList={memberList}/>
            </div>
        </>
    )
}

export default TextChannel
