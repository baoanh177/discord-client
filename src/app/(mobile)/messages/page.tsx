"use client"
import { IoMdPersonAdd } from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5"
import Link from "next/link"
import MessageItem from "~/components/common/MessageItem"
import UserIcon from "~/components/common/UserIcon"
import { images } from "~/assets/images"
import { Fragment } from "react"

const Messages = () => {
    return (
        <>
            <div className="flex flex-col">
                <div
                    className="fixed top-0 left-0 right-0 flex py-9 px-3 bg-[#1a1a1c] z-20 
                    h-16 justify-between items-center"
                >
                    <h3 className="text-xl text-white font-extrabold">
                        Messages
                    </h3>
                    <Link
                        href="/add-friends"
                        className="flex items-center gap-1 py-1 px-2 rounded-full text-white bg-white 
                        bg-opacity-10 text-sm"
                    >
                        <IoMdPersonAdd className="text-lg" />
                        Add Friends
                    </Link>
                </div>
                <div className="mt-16">
                    {/* Search */}
                    <Link
                        href="/search"
                        className="flex items-center gap-3 text-white h-10 w-full rounded-full bg-black px-4"
                    >
                        <IoSearchOutline />
                        Search
                    </Link>
                    {/* Suggest */}
                    <div className="flex items-center gap-2 mt-5 overflow-x-scroll no-scroll">
                        <div className="flex items-center justify-center min-w-20 h-20 bg-[#222] rounded-xl">
                            <UserIcon image={images.f8} size="lg"/>
                        </div>
                        <div className="flex items-center justify-center min-w-20 h-20 bg-[#222] rounded-xl">
                            <UserIcon size="lg"/>
                        </div>
                        <div className="flex items-center justify-center min-w-20 h-20 bg-[#222] rounded-xl">
                            <UserIcon size="lg"/>
                        </div>
                        <div className="flex items-center justify-center min-w-20 h-20 bg-[#222] rounded-xl">
                            <UserIcon size="lg"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mt-4">
                        {[...Array(8).keys()].map((key) => {
                            return (
                                <Fragment key={key}>
                                    <MessageItem
                                        name="baodg."
                                        image={images.f8}
                                        sender="You"
                                        message="nó không yc kn nhưng sẽ có nhiều người apply giống như"
                                        time="1d"
                                        type="mobile"
                                    />
                                    <MessageItem
                                        name="countduck"
                                        sender="You"
                                        message="Oke"
                                        time="1w"
                                        type="mobile"
                                    />
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages
