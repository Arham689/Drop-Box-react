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
        <div className="">
            {/* tag line */}
            <Tagline />
            {/* heaidng */}
            <Header />
            {/* hero section  */}
            <HeroSection />
            {/* second section */}
            <AnimatedHeroSection />
            {/* permissions */}
            <Permissions />
            {/* hero Gredient  */}
            <HeroGradient />
            {/* final section  */}
            <FinalSection />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
