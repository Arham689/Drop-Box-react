import { ArrowRight, Lock } from 'lucide-react';
import dashed from '../assets/dash-image.png';
import hero1 from '../assets/hero1.png';
const Permissions = () => {
    return (
        <div className="font-inner mt-10 flex w-screen justify-center">
            <section className="flex max-w-[1440px] flex-col">
                <div className="flex flex-col items-center gap-2.5">
                    <h1 className="flex items-center justify-center gap-3 rounded-full bg-black px-5 py-1 text-white">
                        {' '}
                        <Lock size={14} /> <span>Permissions</span>
                    </h1>
                    <h2 className="text-2xl font-semibold">Protect all your content </h2>
                    <p className="flex flex-col items-center text-[gray]">
                        <span>
                            Dash makes it easy to find files across apps and safeguard sensitive content. With
                            AI-powered search{' '}
                        </span>{' '}
                        <span>and universal access controls, your team stays connected, efficient and secure.</span>
                    </p>
                    <button className="mt-3 flex items-center gap-2 rounded-2xl border px-6 py-3 text-center">
                        learn more <ArrowRight size={14} />{' '}
                    </button>
                </div>
                <div className="relative">
                    <div>
                        <img width={650} className="z-10 rounded-2xl" src={hero1} alt="" />
                    </div>

                    <div>
                        <img width={450} className="absolute rounded-2xl" src={dashed} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Permissions;
