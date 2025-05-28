import AnimatedHeroSection from '../components/AnimatedHeroSection';
import Header from '../components/Header';
import HeroGradient from '../components/HeroGradient';
import HeroSection from '../components/HeroSection';
import Permissions from '../components/Permissions';
import Tagline from '../components/Tagline';

const Home = () => {
    return (
        <div className=" overflow-x-scroll ">
            {/* tag line */}
            <Tagline />
            {/* heaidng */}
            <Header />
            {/* hero section  */}
            <HeroSection />
            {/* second section */}
            <AnimatedHeroSection />
            {/* permissions */}
            <Permissions  />
            {/* hero Gredient  */}
            <HeroGradient/>
        </div>
    );
};

export default Home;
