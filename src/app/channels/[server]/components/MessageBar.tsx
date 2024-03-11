import { icons } from "~/assets/icons"
import MenuItem from "./MenuItem"

const menuItems = [
    {
        title: "Friends",
        image: icons.friends,
        path: "/channels/me",
        isActive: true,
    },
    { title: "Nitro", image: icons.nitro, path: "/channels/nitro" },
    { title: "Shop", image: icons.friends, path: "/channels/shop" },
]

const MessageBar = ({ server }: { server: string }) => {
    return (
        <>
            <div className="w-60 h-full bg-[#2b2d31] p-2">
                <div className="flex flex-col gap-1 text-white">
                    {menuItems.map((item) => (
                        <MenuItem
                            {...item}
                            isActive={server == item.path.split("/").at(2)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MessageBar
