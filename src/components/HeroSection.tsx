import dashVideo from '../assets/heroimg.png';
const HeroSection = () => {
    return (
        <div className="flex w-screen flex-col items-center justify-center">
            <section className="mt-[154px] mb-14 max-w-[1440px]">
                <div className="flex h-[740px] items-center">
                    <div className="font-inner w-[610px] p-12">
                        <div className="flex items-center-safe gap-3 space-y-2">
                            <p className="bg-button-blue inline-block rounded-full border px-3 py-1 text-xs font-medium text-white">
                                New
                            </p>
                            <p className="font-heading text-button-blue mb-2 text-[20px] font-semibold">
                                Dropbox Dash: Spring ‘25 release
                            </p>
                        </div>

                        <h1 className="text-5xl font-bold">
                            Find anything. <br />
                            Protect everything.
                        </h1>

                        <p className="text-[20px] leading-relaxed text-[gray]">
                            Find, organise and protect your work with Dropbox Dash. Now with advanced search for video,
                            images and team members—plus generative AI capabilities across even more connected apps.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-button-blue h-[78px] rounded-xl p-6 text-center text-sm text-[20px] font-medium text-white">
                                What’s new with Dash →
                            </button>
                            <button className="text-[20px] font-semibold underline">Try Dropbox free →</button>
                        </div>
                    </div>

                    <div className="p-12">
                        <img className="rounded-2xl" width={700} src={dashVideo} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
