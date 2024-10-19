import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import MyServices from "../components/MyServices";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Manitra RASOLOFOARIMANGA | Fullstack Developer & Machine Learning Enthusiast</title>
                <meta name="description" content="Discover Manitra RASOLOFOARIMANGA, a passionate Fullstack Developer from Madagascar, currently pursuing a Master 2 at Université Côte d'Azur, with growing expertise in Machine Learning. Explore my journey and projects." />
                <meta name="keywords" content="Manitra RASOLOFOARIMANGA, Fullstack Developer, Machine Learning, Université Côte d'Azur, Developer, Madagascar, Malagasy, Portfolio" />
            </Helmet>

            <HeroSection />

            <hr data-aos="flip-left" data-aos-duration="1425" className="w-48 h-1 mx-auto bg-light-grey border-0 rounded" />
            
            <MyServices />
        </>
    )
}

export default HomePage;