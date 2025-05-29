import { ArrowRight } from 'lucide-react';
import wip from '../assets/wip.webp';

const AnimatedHeroSection = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center text-white">
            <section className="mx-auto mb-5 w-full max-w-[1440px] px-4">
                <div className="flex flex-col lg:flex-row lg:h-[150px] w-full items-center justify-between rounded-2xl bg-black p-6">
                    <div className="flex items-center justify-center gap-5">
                        <img className="h-auto w-auto max-w-[150px] sm:max-w-[200px]" src={wip} alt="" />

                        <h1 className="font-heading flex-grow text-xl font-bold text-wrap sm:text-2xl md:text-3xl lg:text-4xl">
                            Check out our Spring ‘25 release!
                        </h1>
                    </div>
                    <div>
                        <button className="bg-button-blue flex items-center justify-between gap-2 rounded-2xl px-4 py-4 font-medium text-black sm:px-16 sm:py-5">
                            Watch now <ArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnimatedHeroSection;
