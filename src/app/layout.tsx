import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import UIProvider from "~/app/providers/UIProvider"
import clsx from "clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className)}>
                <UIProvider>{children}</UIProvider>
            </body>
        </html>
    )
}
