import { motion,  useScroll, useTransform } from 'framer-motion';
import { ArrowRight, LockKeyhole } from 'lucide-react';
import { useEffect, useRef } from 'react';

import thumbnail2 from '../assets/BrianThumb2.png';
import thumbnail1 from '../assets/JustinThumb1.png';
import security4 from '../assets/permissions-en_GB.png';
import security1 from '../assets/security-left-1.png';
import security2 from '../assets/security-left-2.png';
import security3 from '../assets/security-left-3.png';
import ParallaxImg from './ParallaxImg';

import greenhouse from '../assets/greenhouse.png';
import hydro from '../assets/hydroflask.png';
import jamf from '../assets/jamf_logo.png';
import may from '../assets/mary_kay.png';
import mcleran from '../assets/mclaren.png';
import sundance from '../assets/sundance.png';
import wag from '../assets/wag.png';

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

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20, 
            filter: 'blur(10px)', 
            scale : 0 
        },
        visible: {
            opacity: 1,
            y: 0, 
            filter: 'blur(0px)', 
            transition: {
                duration: 0.8, 
                ease: [0.17, 0.67, 0.83, 0.67], 
            },
            scale : "100%"
        },
    };
    return (
        <div className="flex justify-center px-12">
            <motion.section
                ref={ref}
                style={{ width }}
                className="from-grad-gray relative -z-50 h-[1800px] w-full rounded-2xl bg-gradient-to-b from-10% to-black px-4 py-32 my-28"
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
                <div className="flex justify-center gap-4 overflow-x-hidden pt-24">
                    <motion.div
                        className="bg-grad-gray flex h-[300px] w-[720px] shrink-0 rounded-2xl p-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <div>
                            <img
                                width={275}
                                height={275}
                                className="rounded-2xl"
                                src={thumbnail1}
                                alt="Testimonial 1"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2 p-4">
                            <div className="text-sm text-pink-500">Testimonial</div>
                            <div className="font-heading text-xl text-white">
                                "The seriously impressive security <br />
                                features"
                            </div>
                            <div className="text-[gray]">
                                tech influencer Justin Tse discusses why he trusts <br /> Dropbox to keep his content
                                safe
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-grad-gray flex h-[300px] w-[720px] shrink-0 rounded-2xl p-3"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                        transition={{ ...cardVariants.visible.transition, delay: 0.2 }}
                    >
                        <div>
                            <img
                                width={275}
                                height={275}
                                className="rounded-2xl"
                                src={thumbnail2}
                                alt="Testimonial 2"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2 p-4">
                            <div className="text-sm text-pink-500">Testimonial</div>
                            <div className="font-heading text-xl text-white">
                                "The security of knowing our <br />
                                information is safe"
                            </div>
                            <div className="text-[gray]">
                                Customer Bryan Chandler reveals how his team uses <br /> Dropbox to organize and share
                                files securely.
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-0 z-40 h-full w-16 bg-gradient-to-r from-black" />
                    <div className="pointer-events-none absolute top-0 right-0 z-40 h-full w-16 bg-gradient-to-l from-black" />

                    <div className="relative w-full ">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: '-50%' }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="mt-24 flex w-max gap-5 whitespace-nowrap text-white"
                        >
                            {[hydro, mcleran, sundance, jamf, may, greenhouse, wag].map((item, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="flex h-[150px] w-[150px] shrink-0 items-center justify-center"
                                >
                                    <img src={item} className="h-full w-full object-contain" />
                                </div>
                            ))}

                            {[hydro, mcleran, sundance, jamf, may, greenhouse, wag].map((item, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex h-[150px] w-[150px] shrink-0 items-center justify-center"
                                >
                                    <img src={item} className="h-full w-full object-contain" />
                                </div>
                            ))}
                            {[hydro, mcleran, sundance, jamf, may, greenhouse, wag].map((item, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="flex h-[150px] w-[150px] shrink-0 items-center justify-center"
                                >
                                    <img src={item} className="h-full w-full object-contain" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HeroGradient;
