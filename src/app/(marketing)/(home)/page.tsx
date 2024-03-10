"use strict"
import FirstFeature from "./sections/FirstFeature"
import FourthFeature from "./sections/FourthFeature"
import SecondFeature from "./sections/SecondFeature"
import ThirdFeature from "./sections/ThirdFeature"
import Hero from "./sections/Hero"

const Home = () => {
    return <>
        <Hero />
        <FirstFeature />
        <SecondFeature />
        <ThirdFeature />
        <FourthFeature />
    </>
}

export default Home