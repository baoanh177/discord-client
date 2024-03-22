import clsx from "clsx"
import UserItem from "../common/UserItem"

const MemberList = ({ memberList }: { memberList: boolean }) => {
    return (
        <>
            <div
                className={clsx(
                    "flex flex-col gap-7 bg-dark-700 transition-widthAndPadding shrink-0",
                    memberList ? "min-w60 w-60 py-5 pl-3 pr-2" : "w-0 p-0"
                )}
            >
                <div className="">
                    <div className="uppercase text-xs text-gray-300 px-3">
                        Online - 3
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <UserItem name="baodg" status="online" />
                        <UserItem name="baodg" status="online" />
                        <UserItem name="baodg" status="online" />
                    </div>
                </div>
                <div className="">
                    <div className="uppercase text-xs text-gray-300 px-3">
                        Offline - 3
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        <UserItem name="baodg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberList
