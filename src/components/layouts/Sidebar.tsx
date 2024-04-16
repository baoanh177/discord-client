"use client";
import Image from "next/image";
import ServerIcon from "../common/ServerIcon";
import { images } from "~/assets/images";
import clsx from "clsx";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { client } from "~/utils/client";

const SideBar = ({ server }: { server: string }) => {
  const [servers, setServers] = useState<any[]>([]);

  console.log(server);

  useEffect(() => {
    client.get("/servers").then(({ response, data }) => setServers(data.data));
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 w-16 bg-dark-800 flex flex-col">
        <div className="hidden w-16 h-16 items-center justify-center relative sm:flex">
          {(server == "me" || server == "nitro" || server == "shop") && (
            <div className="h-10 w-1 bg-white absolute left-0 top-1/2 -translate-y-1/2 rounded-xl"></div>
          )}
          <Link
            href="/channels/me"
            className={clsx(
              `flex items-center justify-center w-11 h-11 hover:rounded-xl 
                transition-roundedAndColors cursor-pointer hover:bg-blue-700`,
              server == "me" || server == "nitro" || server == "shop"
                ? "rounded-xl bg-blue-700"
                : "rounded-[50%] bg-gray-700"
            )}
            scroll={false}
          >
            <Image src={images.logoIcon} alt="" priority />
          </Link>
        </div>
        <div className="hidden h-[2px] w-10 bg-gray-600 rounded-xl mx-auto sm:block"></div>
        {servers?.map((s) => (
          <ServerIcon
            key={s.id}
            id={s.id}
            {...s}
            isActive={server == s.id}
            server={server}
          />
        ))}
        <div className="h-[2px] w-10 bg-gray-600 rounded-xl mx-auto"></div>

        <Tooltip content="Add a Server" placement="right" closeDelay={100}>
          <div
            className="w-16 h-16 flex items-center justify-center relative 
            [&>.tooltip]:hover:opacity-100 [&>.tooltip]:hover:visible"
          >
            <div
              className="flex items-center justify-center w-11 h-11 rounded-[50%] hover:rounded-xl
            transition-roundedAndColors cursor-pointer bg-gray-700 hover:bg-green-700 [&>*]:hover:text-white"
            >
              <AiOutlinePlus className="text-2xl text-green-700 transition-colors" />
            </div>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default SideBar;
