import { ArrowRight } from 'lucide-react';
import wip from '../assets/wip.webp';
const AnimatedHeroSection = () => {
    return (
        <div className="flex w-screen flex-col items-center justify-center text-white">
            <section className="mb-5">
                <div className="flex h-[150px] w-[1440px] items-center justify-between rounded-2xl bg-black p-6">
                    <div className="flex items-center justify-center gap-5">
                        <img width={200} src={wip} alt="" />
                        <h1 className="font-heading text-4xl font-bold">Check out our Spring ‘25 release!</h1>
                    </div>
                    <div>
                        <button className="bg-button-blue flex justify-between rounded-2xl px-16 py-5 font-medium text-black">
                            Watch now <ArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnimatedHeroSection;
