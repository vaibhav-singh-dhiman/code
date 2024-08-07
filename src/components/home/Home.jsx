import React from "react";
import Hero from "./HomePages/Hero";
import './home.css';
import WhoAreWe from "./HomePages/WhoAreWe";
import BestSeller from "./BestSeller/BestSeller";
import FeatureContent from "./FeatureContent";
import Explore from "./HomePages/Explore";
import HomeBlogPage from "./HomePages/HomeBlogPage";
import ContactUs from "./HomePages/ContactUs";
const Home=()=>{
    return(
        <div className="Home">
        <Hero/>
        <WhoAreWe/>
        <BestSeller/>
        <FeatureContent/>
        <Explore/>
        <HomeBlogPage/>
        <ContactUs/>
        </div>
    )
}
export default Home;