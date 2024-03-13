"use client"
"use strict"
import { useState } from "react"
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Button,
} from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { images } from "~/assets/images"
import { StyledButton } from "~/app/components/nextui/button"
import { useRouter } from "next/navigation"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ]

    return (
        <Navbar
        position="static"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            className="bg-[#404eed]"
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Image src={images.logo} alt="" priority />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden sm:flex gap-4 w-full"
                justify="center"
            >
                <NavbarBrand>
                    <Image src={images.logo} alt="" priority />
                </NavbarBrand>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Download
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className="text-white"
                        href="/nitro"
                        aria-current="page"
                    >
                        Nitro
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Discover
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Safety
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Support
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Careers
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <StyledButton
                        color="light"
                        radius="full"
                        onClick={() => router.push("/login")}
                    >
                        Login
                    </StyledButton>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? "warning"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            href="#"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
