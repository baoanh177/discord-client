"use client"
import { ReactNode } from "react"
import { aosInit } from "~/app/helpers"
import "aos/dist/aos.css"
import Footer from "./Footer"
import Header from "./Header"
const MarketingLayout = ({ children }: { children: ReactNode }) => {
    aosInit()
    return <>
        <Header />
        { children }
        <Footer />
    </>
}

export default MarketingLayout