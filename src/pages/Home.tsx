import AnimatedHeroSection from '../components/AnimatedHeroSection';
import FinalSection from '../components/FinalSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroGradient from '../components/HeroGradient';
import HeroSection from '../components/HeroSection';
import Permissions from '../components/Permissions';
import Tagline from '../components/Tagline';

const Home = () => {
    return (
        <div className=" relative ">

            <Tagline />

            <Header />

            <HeroSection />

            <AnimatedHeroSection />

            <Permissions />

            <HeroGradient />

            <FinalSection />

            <Footer />
        </div>
    );
};

export default Home;
