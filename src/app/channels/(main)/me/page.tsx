import { IoSearchOutline } from "react-icons/io5"
import FriendItem from "~/components/me/FriendItem"

const friends = [
    { name: "khanh", status: "online" },
    { name: "baodg", status: "online" },
    { name: "tin", status: "offline" },
    { name: "countduck", status: "offline" },
]

const StartPage = () => {
    return (
        <>
            <div className="flex w-full h-full bg-dark-500">
                <div className="w-2/3 py-5 px-7">
                    <div className="flex relative w-full">
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-8 w-full bg-dark-600 px-3 rounded outline-none text-white"
                        />
                        <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 right-2 text-xl text-gray-400" />
                    </div>
                    <div className="text-xs text-gray-100 mt-6 px-2">
                        ONLINE - { friends.filter(f => f.status == "online").length }
                    </div>
                    <div className="flex flex-col mt-4">
                        {friends.map((f, index) => <FriendItem key={index} {...f} />)}
                    </div>
                </div>
                <div className="w-1/3 bg-dark-300"></div>
            </div>
        </>
    )
}

export default StartPage
