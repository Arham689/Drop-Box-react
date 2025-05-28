import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import { useEffect, useRef } from 'react';

import security4 from '../assets/permissions-en_GB.png';
import security1 from '../assets/security-left-1.png';
import security2 from '../assets/security-left-2.png';
import security3 from '../assets/security-left-3.png';
import ParallaxImg from './ParallaxImg';
const HeroGradient = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const width = useTransform(scrollYProgress, [0, 0.27], ['75%', '100%']);
    useEffect(() => {
        scrollYProgress.onChange((v) => console.log('Scroll progress:', v));
    }, [scrollYProgress]);
    return (
        <div className="flex justify-center px-12">
            <motion.section
                ref={ref}
                style={{ width }}
                className="from-grad-gray relative -z-50 h-[1800px] w-full rounded-2xl bg-gradient-to-b from-10% to-black px-4 py-32"
            >
                <div>
                    <div ref={ref} className="mb-14 flex flex-col items-center gap-2.5 text-white">
                        {' '}
                        <LockKeyhole size={45} /> <span></span>
                        <h2 className="text-4xl font-semibold">Security never comes second</h2>
                        <p className="flex flex-col items-center text-lg text-[gray]">
                            <span>
                                From industry-leading encryption and tamper-proof documents to version history and
                                recovery,
                            </span>
                            <span>
                                Dropbox keeps your intellectual property safe and never sells or shares your data.
                            </span>
                        </p>
                        <button className="mt-3 flex cursor-pointer items-center gap-2 rounded-2xl border px-6 py-3 text-center hover:bg-[gray]">
                            Get Started Free <ArrowRight size={14} />{' '}
                        </button>
                    </div>

                    <div className="relative flex h-[600px] w-full justify-center pt-12">
                        <div>
                            <ParallaxImg
                                src={security2}
                                className="absolute top-[96px] left-[384px] -z-20 h-[160px] w-[160px]"
                                start={50}
                                end={0}
                            />
                            <ParallaxImg
                                src={security1}
                                className="absolute top-[200px] left-[370px] -z-30 h-[260px] w-[200px]"
                                start={50}
                                end={0}
                            />
                        </div>
                        <div>
                            <ParallaxImg
                                src={security3}
                                className="absolute left-[535px] -z-10 h-[475px] w-[375px]"
                                start={50}
                                end={-100}
                            />
                        </div>

                        <ParallaxImg
                            src={security4}
                            className="absolute left-[750px] z-10 h-[500px] w-[600px]"
                            start={150}
                            end={-200}
                        />
                    </div>
                </div>

                {/* horizontal scroll is not woking  */}
                <div className="overflow-x-scroll px-[50%] pt-24">
                    <div className="h-96 w-[2208px] rounded-2xl bg-red-300"></div>
                </div>
            </motion.section>
        </div>
    );
};

export default HeroGradient;
