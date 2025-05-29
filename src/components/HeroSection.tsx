import dashVideo from '../assets/heroimg.png';

const HeroSection = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <section className="mt-[154px] mb-14 max-w-[1440px] w-full px-4"> 
                <div className="flex flex-col justify-center max-w-full lg:flex-row lg:h-[740px] items-center">
                    
                    <div className="font-inner p-3 lg:p-12 lg:flex-1 lg:max-w-[50%]">
                        <div className="flex items-center-safe gap-3 space-y-2">
                            <p className="bg-button-blue inline-block rounded-full border px-3 py-1 text-xs font-medium text-white">
                                New
                            </p>
                            <p className="font-heading text-button-blue mb-2 text-[14px] leading-3.5 lg:text-[20px] font-semibold">
                                Dropbox Dash: Spring ‘25 release
                            </p>
                        </div>

                        <h1 className="text-[32px] leading-none font-semibold lg:text-5xl lg:font-bold l">
                            Find anything. <br />
                            Protect everything.
                        </h1>

                        <p className="text-[14px] lg:text[20px] pt-2 lg:p-0  leading-tight lg:leading-relaxed text-[gray]">
                            Find, organise and protect your work with Dropbox Dash. Now with advanced search for video,
                            images and team members—plus generative AI capabilities across even more connected apps.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-button-blue lg:h-[78px] rounded-xl p-3 lg:p-6 text-center lg:text-[20px] font-medium text-white">
                                What’s new with Dash →
                            </button>
                            <button className="text-[20px] font-semibold underline">Try Dropbox free →</button>
                        </div>
                    </div>

                    {/* Image Column - Let it grow and take half the space */}
                    <div className="lg:p-12 p-3 lg:flex-1 lg:max-w-[50%]">
                        <img className="rounded-2xl w-full h-auto" src={dashVideo} alt="" /> {/* Image will now scale to fit its parent */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;