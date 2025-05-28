import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, File, Lock, Users } from 'lucide-react';
import { useRef, type ComponentType } from 'react';
import backasset from '../assets/backasset-feature2.png';
import backasset3 from '../assets/backasset-feature3.png';
import dashed from '../assets/dash-image.png';
import hero1 from '../assets/hero1.png';
import pv from '../assets/pv-feature.png';
import pv3 from '../assets/pv-feature3.png';
const Permissions = () => {
    return (
        <div className="font-inner mt-30 flex w-screen flex-col items-center justify-center">
            <section className="flex max-w-[1440px] flex-col">
                <FadeText Icon={Lock} heading='Permissions' title='Protect all your content' para={["Dash makes it easy to find files across apps and safeguard sensitive content. With AI-powered search" , "and universal access controls, your team stays connected, efficient and secure."]}/>
                <div className="relative flex">
                    <ParallaxImg
                        src={hero1}
                        alt=""
                        start={205}
                        end={-175}
                        className="absolute right-70 z-20 w-[650px]"
                    />{' '}
                    {/** ml-24*/}
                    <ParallaxImg
                        src={dashed}
                        alt=""
                        start={0}
                        end={-70}
                        className="absolute -right-25 z-10 w-[450px]"
                    />{' '}
                    {/** left-96  ml-24*/}
                </div>
                <div className="h-[600px]"></div>
            </section>

            {/* 2 */}

            <section className="flex max-w-[1440px] flex-col">
                <FadeText Icon={File} heading='Content managemen' title='Stay organised and on track' para={["Smart organisation and suggestions, natural language search and seamless integrations mean" , "everything is easy to find and intuitive to manage—all within Dropbox cloud storage, so your team can" , "focus on their work"]}/>
                
                <div className="relative flex">
                    <ParallaxImg src={pv} alt="" start={205} end={-175} className="absolute right-70 z-20 w-[650px]" />{' '}
                    {/** ml-24*/}
                    <ParallaxImg
                        src={backasset}
                        alt=""
                        start={0}
                        end={-70}
                        className="absolute -right-25 z-10 w-[450px]"
                    />{' '}
                    {/** left-96  ml-24*/}
                </div>
                <div className="h-[600px]"></div>
            </section>

            {/* 3 */}

            <section className="flex max-w-[1440px] flex-col">
                <FadeText Icon={Users} heading='Collaboration' title='Instant sharing keeps work flowing' para={["Secure links, real-time syncing and large file transfers keep your team and partners connected so" , "collaboration stays seamless."]}/>

                <div className="relative flex">
                    <ParallaxImg src={pv3} alt="" start={205} end={-175} className="absolute right-70 z-20 w-[650px]" />{' '}
                    {/** ml-24*/}
                    <ParallaxImg
                        src={backasset3}
                        alt=""
                        start={0}
                        end={-70}
                        className="absolute -right-25 z-10 w-[450px]"
                    />{' '}
                    {/** left-96  ml-24*/}
                </div>
                <div className="h-[600px]"></div>
            </section>
        </div>
    );
};

export default Permissions;

const ParallaxImg = ({
    className,
    alt,
    src,
    start,
    end,
}: {
    className?: string;
    alt?: string;
    src: string;
    start: number;
    end: number;
}) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return <motion.img src={src} alt={alt} className={className} ref={ref} style={{ transform, opacity }} />;
};

const FadeText = ({ heading, title, para  , Icon }: { heading: string; title: string; para: Array<string> , Icon: ComponentType<{ size?: number }>; }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
    const margin = useTransform(scrollYProgress , [0.3 , 0.5] , ["20px" , "3px"])

    return (
        <motion.div ref={ref} style={{ opacity }} className="mb-32 flex flex-col items-center gap-2.5">
            <motion.h1 style={{margin}} className="flex items-center justify-center gap-3 rounded-full bg-black px-5 py-1 text-white">
                {' '}
                <Icon size={14} /> <span>{heading}</span>
            </motion.h1>
            <motion.h2 style={{margin}} className="text-2xl font-semibold">{title} </motion.h2 >
            <motion.p style={{margin}} className="flex flex-col items-center text-[gray]">
                {para.map((p) => (
                    <span>{p}</span>
                ))}
            </motion.p >
            <motion.button style={{margin}} className="mt-3 flex items-center gap-2 rounded-2xl border px-6 py-3 text-center">
                learn more <ArrowRight size={14} />{' '}
            </motion.button>
        </motion.div>
    );
};
