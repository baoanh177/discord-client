"use client"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"
import { icons } from "~/assets/icons"

const TopBar = () => {
    const [activeTab, setActiveTab] = useState("all")

    return (
        <>
            <div className="flex items-center h-[50px] py-3 px-4 bg-dark-500 border-b-2 border-dark-800 select-none">
                <div className="flex gap-2 items-center text-white">
                    <Image src={icons.friends} alt="" className="w-5" />
                    Friends
                </div>
                <div className="w-[1px] h-full bg-white mx-3"></div>
                <nav>
                    <ul className="flex gap-4 [&>li>div]:px-2 [&>li>div]:rounded text-white">
                        <li>
                            <div
                                className={clsx(
                                    "bg-white bg-opacity-0 cursor-pointer",
                                    activeTab == "all" ? "bg-opacity-15" : "hover:bg-opacity-5"
                                )}
                                onClick={() => setActiveTab("all")}
                            >
                                All
                            </div>
                        </li>
                        <li>
                            <div
                                className={clsx(
                                    "bg-white bg-opacity-0 cursor-pointer",
                                    activeTab == "online" ? "bg-opacity-15" : "hover:bg-opacity-5"
                                )}
                                onClick={() => setActiveTab("online")}
                            >
                                Online
                            </div>
                        </li>
                        <li>
                            <div
                                className={clsx(
                                    "bg-white bg-opacity-0 cursor-pointer",
                                    activeTab == "pending" ? "bg-opacity-15" : "hover:bg-opacity-5"
                                )}
                                onClick={() => setActiveTab("pending")}
                            >
                                Pending
                            </div>
                        </li>
                        <li>
                            <div
                                className={clsx(
                                    "bg-white bg-opacity-0 cursor-pointer",
                                    activeTab == "blocked" ? "bg-opacity-15" : "hover:bg-opacity-5"
                                )}
                                onClick={() => setActiveTab("blocked")}
                            >
                                Blocked
                            </div>
                        </li>
                    </ul>
                </nav>
                <button className="px-2 text-white bg-green-600 rounded ml-4 hover:bg-green-700 transition-colors">Add Friend</button>
            </div>
        </>
    )
}

export default TopBar
