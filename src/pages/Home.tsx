import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Tagline from '../components/Tagline';

const Home = () => {
	return (
		<div className='relative w-screen h-screen'>
			{/* tag line */}
			<Tagline />
			{/* heaidng */}
			<Header />
			{/* hero section  */}
			<HeroSection />
		</div>
	);
};

export default Home;
