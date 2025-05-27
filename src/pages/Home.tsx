import AnimatedHeroSection from '../components/AnimatedHeroSection';
import Header from '../components/Header';
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
        </div>
    );
};

export default Home;
