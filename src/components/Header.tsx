import { Globe } from 'lucide-react';
const Header = () => {
    return (
        <nav className="font-inner fixed top-14 flex h-24 w-full justify-between bg-white p-6 z-30">
            <section className="flex items-center justify-center text-sm font-semibold">
                <div className="flex items-center justify-center">
                    <div className="bg-button-blue flex h-[40px] w-[40px] items-center justify-center">
                        <DropBoxLogo />
                    </div>
                    <span className="pr-6 pl-3 font-semibold">
                        <TextLogoDropBox />
                    </span>
                </div>

                <div className="group relative flex cursor-pointer items-center justify-center gap-0.5 px-3">
                    <div className="hover:text-button-blue flex items-center justify-center">
                        Products <DownSvg />
                    </div>

                    <div className="invisible absolute top-9 left-0 z-50 w-[800px] translate-y-0 transform opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
                        <div className="pointer-events-none invisible absolute top-0 -left-[195px] z-[-1] h-full w-screen bg-white opacity-0 shadow-2xl transition duration-300 ease-in-out group-hover:visible group-hover:opacity-100"></div>

                        <div className="grid grid-cols-2 grid-rows-4">
                            {data.map((i) => (
                                <DropDownCard content={i.content} heading={i.heading} logo={i.logo} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="group relative flex cursor-pointer items-center justify-center gap-0.5 px-3">
                    <div className="hover:text-button-blue flex items-center justify-center">
                        Solutions <DownSvg />
                    </div>

                    <div className="invisible absolute top-9 left-0 z-50 w-[800px] translate-y-0 transform opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
                        <div className="pointer-events-none invisible absolute top-0 -left-[290px] z-[-1] h-full w-screen bg-white opacity-0 shadow-2xl transition duration-300 ease-in-out group-hover:visible group-hover:opacity-100"></div>

                        <div className="grid grid-cols-3">
                            <div className="flex list-none flex-col gap-2 text-[gray]">
                                Teams
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                    Sales
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                    Marketing
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                    IT{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                    HR{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                    Creatives
                                </li>
                            </div>
                            <div className="flex list-none flex-col gap-2 text-[gray]">
                                Use case
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Cloud Storage
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Sent Large filse
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Video Review{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Signing Documents{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Sharing Files{' '}
                                </li>
                            </div>

                            <div className="flex list-none flex-col gap-2 pb-3 text-[gray]">
                                Industries
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Construction{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Technology{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Manufacturing{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Media{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Profational Srvices{' '}
                                </li>
                                <li className="w-[70%] rounded-lg py-2 pr-2 text-[16px] font-medium text-black hover:bg-amber-50">
                                    Education{' '}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover:text-button-blue cursor-pointer px-3">Enterprise</div>
                <div className="hover:text-button-blue cursor-pointer px-3">Pricing</div>
            </section>

            <section className="flex items-center justify-center text-sm">
                <div className="px-3 font-semibold">
                    <Globe size={16} />
                </div>
                <div className="hover:text-button-blue cursor-pointer px-3">Contact Sales</div>
                <div className="group relative flex cursor-pointer items-center justify-center gap-0.5 px-3">
                    <div className="hover:text-button-blue flex items-center justify-center">
                        Get App <DownSvg />
                    </div>

                    <div className="invisible absolute top-9 left-0 z-50 w-[800px] translate-y-0 transform opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-5 group-hover:transform group-hover:opacity-100">
                        <div className="pointer-events-none invisible absolute top-0 -left-[1300px] z-[-1] h-full w-screen bg-white opacity-0 shadow-2xl transition duration-300 ease-in-out group-hover:visible group-hover:opacity-100"></div>

                        <div className="flex list-none flex-col gap-2 pb-3 text-[gray]">
                            Teams
                            <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                Desktop App
                            </li>
                            <li className="w-[70%] rounded-lg py-2 pr-2 text-[14px] font-medium text-black hover:bg-amber-50">
                                Mobile App
                            </li>
                        </div>
                    </div>
                </div>

                <div className="hover:text-button-blue cursor-pointer px-3">Sign up </div>
                <div className="hover:text-button-blue cursor-pointer px-3">Log in </div>

                <div className="pl-3 text-[16px] font-semibold">
                    <button className="bg-button-blue h-10 rounded-xl px-3 text-white">Get started</button>
                </div>
            </section>
        </nav>
    );
};

export default Header;

const DropBoxLogo = () => {
    return (
        <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="dropbox-glyph"
        >
            <path
                d="M7.70076 0.320312L0.478516 4.91332L7.70076 9.50633L14.9242 4.91332L22.1465 9.50633L29.3687 4.91332L22.1465 0.320312L14.9242 4.91332L7.70076 0.320312Z"
                fill="#F7F5F2"
            ></path>
            <path
                d="M7.70076 18.6925L0.478516 14.0994L7.70076 9.50633L14.9242 14.0994L7.70076 18.6925Z"
                fill="#F7F5F2"
            ></path>
            <path
                d="M14.9242 14.0994L22.1465 9.50633L29.3687 14.0994L22.1465 18.6925L14.9242 14.0994Z"
                fill="#F7F5F2"
            ></path>
            <path
                d="M14.9242 24.8164L7.70077 20.2234L14.9242 15.6304L22.1465 20.2234L14.9242 24.8164Z"
                fill="#F7F5F2"
            ></path>
        </svg>
    );
};

const TextLogoDropBox = () => {
    return (
        <svg
            width="93"
            height="22"
            viewBox="0 0 93 22"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            data-testid="dropbox-wordmark"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M79.0027 17.1956L83.8346 10.6951L79.3777 4.55302H83.1948L85.7762 8.38529L88.3798 4.55302H92.1748L87.6517 10.6731L92.4175 17.1956H88.6666L85.7321 13.0709L82.8859 17.1956H79.0027Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M66.8534 11.1269C66.8534 15.2995 69.1327 17.5177 73.1703 17.5177C76.9474 17.5177 79.5089 15.2995 79.5089 11.1269V10.7755C79.5089 6.55884 76.904 4.23092 73.1703 4.23092C69.5234 4.23092 66.8534 6.51492 66.8534 10.7755V11.1269ZM76.2184 11.1278C76.2184 13.4426 75.0645 14.6993 73.1702 14.6993C71.2978 14.6993 70.1438 13.4206 70.1438 11.1278V10.8192C70.1438 8.35003 71.3631 7.04932 73.192 7.04932C75.0427 7.04932 76.2184 8.43822 76.2184 10.8192V11.1278Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.8155 14.8834C56.5002 16.5079 57.8695 17.5177 59.9678 17.5177C63.2144 17.5177 65.3347 15.1468 65.3347 10.932V10.5588C65.3347 6.34398 63.0819 4.25851 60.0561 4.23656C58.0462 4.23656 56.6327 5.1366 55.926 6.78302V0.285156H52.6793V17.1884H55.5505L55.8155 14.8834ZM62.0443 10.9622C62.0443 13.4682 60.8862 14.6993 58.9851 14.6993C57.1715 14.6993 55.9697 13.3363 55.9697 10.9622V10.6984C55.9697 8.52216 57.2152 7.04932 59.0288 7.04932C60.7769 7.04932 62.0443 8.32431 62.0443 10.6545V10.9622Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.252 4.56791V21.544H41.493V15.1865C42.1765 16.6635 43.5215 17.5672 45.5499 17.5672C48.5484 17.5672 50.9075 15.3849 50.9075 11.1967V10.844C50.9075 6.56753 48.7909 4.23092 45.5499 4.23092C43.4553 4.23092 42.0442 5.31105 41.3608 6.94227L41.03 4.56791H38.252ZM47.6171 11.1161C47.6171 13.4463 46.4152 14.6993 44.536 14.6993C42.7224 14.6993 41.5424 13.2924 41.5424 11.0502V10.8083C41.5424 8.45621 42.7661 7.04932 44.6016 7.04932C46.3278 7.04932 47.6171 8.30233 47.6171 10.8303V11.1161Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.8248 11.1269C23.8248 15.2995 26.1258 17.5177 30.1634 17.5177C33.9405 17.5177 36.4802 15.2995 36.4802 11.1269V10.7755C36.4802 6.55884 33.897 4.23092 30.1634 4.23092C26.5165 4.23092 23.8248 6.51492 23.8248 10.7755V11.1269ZM33.1898 11.1278C33.1898 13.4426 32.0141 14.6993 30.1416 14.6993C28.2692 14.6993 27.1152 13.4206 27.1152 11.1278V10.8192C27.1152 8.35003 28.3345 7.04932 30.1634 7.04932C32.0141 7.04932 33.1898 8.43822 33.1898 10.8192V11.1278Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9659 17.1956H18.2854V11.3877C18.2854 8.70383 18.9493 7.75786 21.6934 7.75786H23.0654V4.39197H22.2466C19.8788 4.39197 18.5731 5.42593 18.0641 7.44987L17.6436 4.55228H14.9659V17.1956Z"
            ></path>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.285583 1.57357V17.1956H6.31261C10.2386 17.1956 13.1942 14.9151 13.1942 9.87184V8.7974C13.1942 3.77605 10.0622 1.57357 6.22439 1.57357H0.285583ZM3.57601 4.39197H6.08687C8.35455 4.39197 9.90375 5.82472 9.90375 8.97678V9.79235C9.90375 12.9444 8.39945 14.3772 6.19913 14.3772H3.57601V4.39197Z"
            ></path>
        </svg>
    );
};

const DownSvg = () => {
    return (
        <span className="dwg-nav-item-button__chevron dwg-nav-item-button--nav-redesign__chevron dwg-lazy-icon--small dwg-box dwg-display--inline-block dwg-color--faint">
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon dig-UIIcon--small"
                width="16"
                height="16"
                role="presentation"
                focusable="false"
            >
                <path
                    d="m5.25 9.25 6.5 6.25 6.5-6.25"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    vector-effect="non-scaling-stroke"
                ></path>
            </svg>
        </span>
    );
};

const DropDownCard = ({ content, heading, logo }: { content: Array<string>; heading: string; logo: string }) => {
    return (
        <>
            <div className="flex w-2xs gap-5 rounded-xl px-1 py-3 hover:bg-amber-50">
                <div className="h-fit rounded-md bg-white">
                    <img className="h-32-px] w-[32px]" src={logo} alt="" />
                </div>
                <div>
                    <div className="hover:text-button-blue text-lg font-semibold">{heading}</div>
                    <div className="text-sm font-light text-[gray]">
                        {content[0]}
                        <br /> {content[1]}
                    </div>
                </div>
            </div>
        </>
    );
};

const data = [
    {
        content: ['Store, share and access', 'the file across the devices'],
        heading: 'DropBox',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Dropbox-logo-nav.svg?id=d587e174-e284-42e8-a18c-85c0d8e57e9e',
    },
    {
        content: ['Find, organise and protect', 'company content'],
        heading: 'Dash',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/replay-logo-nav.svg?id=411f20bf-600b-42f8-a5a5-508c48fc55f7',
    },
    {
        content: ['Review and approve videos', 'faster'],
        heading: 'Replay',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Backup-logo-nav.svg?id=88a257c5-602b-48c0-bf49-e65aa2df21dd',
    },
    {
        content: ['Send documents securely', 'and track activity'],
        heading: 'DocSend',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/reclaim-dbx-waffle-32x32.svg?id=48ed6a4b-91be-43f0-a91e-0868a4380db7',
    },
    {
        content: ['Automatically back up', 'your devices'],
        heading: 'Backup',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dash-logo-nav.svg?id=0eaff5fa-ffc5-41dd-bba1-4f05c5e32205',
    },
    {
        content: ['Request and add signatures', 'to documents'],
        heading: 'Sign',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/DocSend-logo-nav.svg?id=27f665ce-74c5-4746-8b8c-61cd9e34aadd',
    },
    {
        content: ['Schedule habits, tasks and', 'meetings with AI'],
        heading: 'Reclaim.ai',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dropbox-sign-logo.svg?id=f9aee885-ea7b-4b1f-81fd-3e908dadc578',
    },
    {
        content: ['Preview new product', 'experiences'],
        heading: 'Early access',
        logo: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/arrow_right.svg?id=e5339d6c-dcc7-477d-984b-7b2a039ca239',
    },
];
