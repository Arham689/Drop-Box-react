import { ArrowRight } from 'lucide-react';

const Tagline = () => {
    return (
        <div className="font-inter  text-dark-blue bg-light-blue fixed top-0 flex  z-30 w-screen cursor-pointer items-center justify-center p-4 text-[10px] sm:text-sm font-semibold underline underline-offset-2">
            Watch our Spring ’25 release event on demand to see how Dash delivers faster, more secure work{' '}
            <ArrowRight size={22} />
        </div>
    );
};

export default Tagline;
