
import dashVideo from '../assets/heroimg.png';
const HeroSection = () => {
  return (
        <section className="mt-[154px] max-w-[1440px] mx-auto ">
            
            <div className=" flex h-[740px] items-center ">
                <div className="font-inner p-12 w-[610px] ">
            
                {/* Tag + Title */}
                <div className="space-y-2 flex gap-3  items-center-safe">
                    <p className="inline-block px-3 py-1 text-xs font-medium border rounded-full bg-button-blue text-white">
                    New
                    </p>
                    <p className="text-[20px] font-semibold mb-2 font-heading text-button-blue ">
                    Dropbox Dash: Spring ‘25 release
                    </p>
                </div>

                {/* Heading */}
                <h1 className="text-5xl font-bold">
                    Find anything. <br />
                    Protect everything.
                </h1>

                {/* Subtext */}
                <p className="text-[20px] leading-relaxed  text-[gray]">
                    Find, organise and protect your work with Dropbox Dash. Now with advanced search for video, images and team members—plus generative AI capabilities across even more connected apps.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <button className="p-6 h-[78px] text-sm text-[20px] text-center  font-medium rounded-xl bg-button-blue text-white">
                    What’s new with Dash →
                    </button>
                    <button className="text-[20px] font-semibold underline ">
                    Try Dropbox free →
                    </button>
                </div>

            </div>

            <div className='p-12'>
                {/* <video src="../src/assets/dash-multimedia-search-homepage-ui-transparent-1080xauto-v3.mov"></video> */}
                <img width={700}  src={dashVideo}alt="" />
            </div>
        </div>
            
        </section>
  )
}

export default HeroSection
