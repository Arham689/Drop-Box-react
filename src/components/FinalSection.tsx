import last6 from '../assets/last-1.png';
import last5 from '../assets/last2.png';
import last4 from '../assets/last3.png';
import last3 from '../assets/last4.png';
import last2 from '../assets/last5.png';
import last1 from '../assets/last6.png';

import article1 from '../assets/Article1.png';
import article2 from '../assets/Article2.png';
import article3 from '../assets/Article3.png';

import { motion } from 'framer-motion';
const FinalSection = () => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(10px)',
            scale: 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.17, 0.67, 0.83, 0.67],
            },
            scale: '100%',
        },
    };
    return (
        <div className="my-20  w-screen">
            <section className="flex flex-col items-center justify-center gap-11 py-28">
                <h2 className="font-mediun font-heading text-4xl">Dropbox empowers across industries</h2>
                <div className="grid grid-cols-2 gap-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last1} heading="Construction" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last2} heading="Technology" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last3} heading="Manufacturing" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last4} heading="Mediia" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last5} heading="Profational Services" />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <Card src={last6} heading="Education" />
                    </motion.div>
                </div>
            </section>

            <section className="my-28 flex flex-col items-center justify-center gap-11">
                <h2 className="font-mediun font-heading text-4xl">Discover, Learn, thrive with Dropbox</h2>
                <div className="mt-8 flex gap-3">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <ArticleCard
                            src={article1}
                            title="Study: Here’s how many hours we lose to distraction—and how to get our focus back"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <ArticleCard
                            src={article2}
                            title="Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team"
                        />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <ArticleCard src={article3} title="The best way to share photos with family and friends" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FinalSection;

const Card = ({ src, heading }: { src: string; heading: string }) => {
    return (
        <div className="flex w-[520px] items-center rounded-2xl bg-[#F9F7F4] p-6">
            <img src={src} alt="Construction" className="h-[150px] w-[150px] rounded-xl object-cover" />
            <div className="ml-6 flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-[#1E1E1E]">{heading}</h2>
                <p className="text-sm text-[#5B5B5B]">
                    With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual
                    content files from anywhere.
                </p>
                <a
                    href="#"
                    className="mt-2 inline-flex items-center font-semibold text-black underline underline-offset-4"
                >
                    Learn more <span className="ml-1 text-lg">→</span>
                </a>
            </div>
        </div>
    );
};

const ArticleCard = ({ src, title }: { src: string; title: string }) => {
    return (
        <div className="h-[490px] w-[350px] overflow-hidden rounded-2xl bg-[#F9F7F4] shadow-md">
            <img src={src} alt="Article Thumbnail" className="h-[180px] w-full object-cover" />

            <div className="flex flex-col gap-3 p-6">
                <span className="text-sm font-semibold text-gray-500">Article</span>

                <h3 className="text-lg leading-snug font-bold text-black">{title}</h3>

                <p className="text-sm text-gray-600">
                    For our study, Economist Impact included knowledge workers globally, and found that, no matter where
                    people work, there’s a significant cost to lost focus around the world.
                </p>

                <a href="#" className="mt-auto text-sm font-semibold text-black underline underline-offset-4">
                    Read article
                </a>
            </div>
        </div>
    );
};
