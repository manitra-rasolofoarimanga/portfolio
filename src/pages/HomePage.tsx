import HeroSection from "../components/HeroSection";
import MyServices from "../components/MyServices";

const HomePage = () => {
    return (
        <>
            <HeroSection />

            <hr data-aos="flip-left" data-aos-duration="1425" className="w-48 h-1 mx-auto bg-light-grey border-0 rounded" />
            
            <MyServices />
        </>
    )
}

export default HomePage;