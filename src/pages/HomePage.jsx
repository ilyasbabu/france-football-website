import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import card1 from "../images/card1.jpg";
import card2 from "../images/photo6102922174705807799.jpg";
import card3 from "../images/photo6102922174705807795.jpg";
import slide1 from "../images/photo_6102922174705807783_y.jpg";
import slide2 from "../images/photo6096070722616144789.jpg";
import slide3 from "../images/photo6096070722616144788.jpg";
import section1 from "../images/photo6102922174705807800.jpg";
import section2 from "../images/1998.avif";
import section3 from "../images/bg3.webp";
import sponsor1 from "../images/sponsors/credit-agricole.png"
import sponsor2 from "../images/sponsors/nike.png"
import sponsor3 from "../images/sponsors/uber-eats.png"
import sponsor4 from "../images/sponsors/vw.png"
import sponsor5 from "../images/sponsors/edf.png"
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <main className="bg-slate-900 relative">
            <div id="mobileNav" className="absolute z-10 w-full hidden">
                <div className="md:hidden flex flex-col justify-between items-start py-2 bg-slate-900">
                    <div className="px-4 pb-2">
                        <a href="team.html"
                            className="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">SQUAD</a>
                    </div>
                    <div className="px-4 py-2">
                        <a href="gallery.html"
                            className="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">GALLERY</a>
                    </div>
                </div>
            </div>
            <section className="h-full ">
                <div>
                    <Carousel autoPlay infiniteLoop showThumbs={false} emulateTouch showStatus={false} showIndicators={false}>
                        <div className="relative overflow-hidden mySlides fade h-[50vh] md:h-[80vh]">
                            <img src={slide1} alt="background"
                                className="object-cover w-full h-full hover:scale-105 transition ease-in-out duration-500" />
                            <div
                                className="absolute w-full h-1/6 font-semibold p-5 bottom-0 inset-x-0 text-white text-4xl text-left leading-4">
                                <p className=" opacity-80 hover:opacity-100 transition ease-in-out duration-500"> The Champions
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden mySlides fade h-[50vh] md:h-[80vh]">
                            <img src={slide2} alt="background"
                                className="object-cover w-full h-full hover:scale-105 transition ease-in-out duration-500" />
                            <div
                                className="absolute w-full h-1/6 font-semibold p-5 bottom-0 inset-x-0 text-white text-4xl text-left leading-4">
                                <p className=" opacity-80 hover:opacity-100 transition ease-in-out duration-500"> The French Team
                                </p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden mySlides fade h-[50vh] md:h-[80vh]">
                            <img src={slide3} alt="background"
                                className="object-cover w-full h-full hover:scale-105 transition ease-in-out duration-500" />
                            <div
                                className="absolute w-full h-1/6 font-semibold p-5 bottom-0 inset-x-0 text-white text-4xl text-left leading-4">
                                <p className=" opacity-80 hover:opacity-100 transition ease-in-out duration-500"> Allez Les Bleus!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                    <div className="h-1 flex">
                        <div className="w-1/3 bg-blue-900">
                            <p>&nbsp;</p>
                        </div>
                        <div className="w-1/3 bg-white">
                            <p>&nbsp;</p>
                        </div>
                        <div className="w-1/3 bg-red-800">
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative h-full bg-slate-600 items-center flex justify-between md:flex-row flex-col pb-2 md:pb-0">
                <div className="absolute bg-black h-full top-0 w-full">
                    <div className="h-full flex">
                        <div className="w-1/3 bg-blue-900">
                        </div>
                        <div className="w-1/3 bg-white">
                        </div>
                        <div className="w-1/3 bg-red-800">
                        </div>
                    </div>
                </div>
                <div className="pb-2 md:pb-12 md:p-12 p-6 w-full">
                    <div className="flex justify-center">
                        <figure
                            className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:scale-105 hover:grayscale-0">
                            <a href="team.html">
                                <img className="rounded-lg " src={card1} alt="squad" />
                            </a>
                            <figcaption className="absolute bottom-6 px-4 text-lg w-full text-white">
                                <div className="flex justify-end w-full">
                                    <Link to="/squad" className="bg-red-700 p-1 px-2 font-semibold text-sm rounded-sm">VIEW
                                        SQUAD</Link>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="pb-2 md:pb-12 md:p-12 p-6 w-full">
                    <div className="flex justify-center">
                        <figure
                            className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:scale-105 hover:grayscale-0">
                            <a href="https://www.fff.fr/">
                                <img className="rounded-lg" src={card2} alt="official website" />
                            </a>
                            <figcaption className="absolute bottom-6 px-4 text-lg w-full text-white">
                                <div className="flex justify-end w-full">
                                    <a href="https://www.fff.fr/" className="bg-red-700 p-1 px-2 font-semibold text-sm">VISIT
                                        OFFICIAL WEBSITE</a>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="pb-2 md:pb-12 md:p-12 p-6 w-full">
                    <div className="flex justify-center">
                        <figure
                            className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:scale-105 hover:grayscale-0">
                            <a href="gallery.html">
                                <img className="rounded-lg" src={card3} alt="gallery" />
                            </a>
                            <figcaption className="absolute bottom-6 px-4 text-lg w-full text-white">
                                <div className="flex justify-end w-full">
                                    <Link to="/gallery" className="bg-red-700 p-1 px-2 font-semibold text-sm">VIEW
                                        GALLERY</Link>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                </div>

            </section>
            <section className="p-12 h-full w-full grid md:grid-flow-col grid-flow-row bg-slate-200">
                <div className="w-full">
                    <img className="h-full w-full object-cover object-center" src={section1} alt="" />
                </div>
                <div className="w-full md:p-12 py-12 md:py-0 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-700  pb-5">A Glimpse on World Cup</h3>
                    <p className="text-slate-700 md:text-lg">France has won two World Cups, one in 1998 and another in 2018.
                        France has also won two UEFA European Football Championships, first in 1984, led by Ballon d'Or
                        winner Michel Platini, and then in 2000, led by FIFA World Player of the Year Zinedine Zidane. In
                        total
                        they have won two FIFA World Cups, two UEFA European Championships, two FIFA Confederations Cups,
                        one CONMEBOL–UEFA Cup of Champions and one UEFA Nations League title.</p>
                </div>
                <div className="h-2 md:flex hidden">
                    <div className="w-1/3 bg-blue-900">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-white">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-red-800">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </section>
            <section className="p-12 h-full w-full grid md:grid-flow-col grid-flow-row bg-slate-600">
                <div className="h-2 md:flex hidden">
                    <div className="w-1/3 bg-blue-900">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-white">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-red-800">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="w-full md:p-12 py-12 md:py-0 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-100  pb-5">The Golden Era</h3>
                    <p className="text-slate-200">From 1998 to 2006, it is considered as the golden era for the french football.
                        The France national football team began a period of international dominance defeating Brazil 3–0 to
                        win the 1998 FIFA World Cup, becoming the first French team to win the World Cup. Two years later,
                        David Trezeguet's golden goal in extra time gave France a 2–1 win over Italy to give France the 2000
                        European Championship.</p>
                    <p className="text-slate-200">The French golden team was composed of players such as Zinedine Zidane,
                        Thierry Henry, David Trezeguet, Lilian Thuram, Laurent Blanc, Robert Pires, Patrick Vieira, Didier
                        Deschamps, Fabien Barthez, Emmanuel Petit, Marcel Desailly, and Bixente Lizarazu.</p>
                </div>
                <div className="w-full">
                    <img className="h-full w-full object-cover object-center" src={section2} alt=""  />
                </div>
            </section>
            <section className="p-12 h-full w-full grid md:grid-flow-col grid-flow-row bg-slate-200">
                <div className="w-full">
                    <img className="h-full w-full object-cover object-center" src={section3} alt=""  />
                </div>
                <div className="w-full md:p-12 py-12 md:py-0 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-700  pb-5">Football in France</h3>
                    <p className="text-slate-700 md:text-lg">Association football is the most popular sport in France. The
                        French Football Federation (FFF, Fédération Française de Football) is the national governing body
                        and is responsible for overseeing all aspects of association football in the country, both
                        professional and amateur. Ligue 1 is the French professional league for football clubs. It is the
                        country's primary football competition and serves as the top division of the French football league
                        system. Contested by 20 clubs, it operates on a system of promotion and relegation with Ligue 2.</p>
                </div>
                <div className="h-2 md:flex hidden">
                    <div className="w-1/3 bg-blue-900">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-white">
                        <p>&nbsp;</p>
                    </div>
                    <div className="w-1/3 bg-red-800">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </section>
            <section className="pt-5 pb-9 bg-white">
                <div className="flex justify-center pb-5 font-extrabold md:text-sm text-xs">
                    <div><h5>TEAM PARTNERS</h5></div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="p-2 px-4"><img className="md:h-10 h-5" src={sponsor1} alt="" /></div>
                    <div className="p-2 px-4"><img className="md:h-10 h-5" src={sponsor2} alt="" /></div>
                    <div className="p-2 px-4"><img className="md:h-10 h-5" src={sponsor3} alt="" /></div>
                    <div className="p-2 px-4"><img className="md:h-10 h-5" src={sponsor4} alt="" /></div>
                    <div className="p-2 px-4"><img className="md:h-10 h-5" src={sponsor5} alt="" /></div>
                </div>
            </section>
            <div className="h-1 flex">
                <div className="w-1/3 bg-blue-900">
                    <p>&nbsp;</p>
                </div>
                <div className="w-1/3 bg-white">
                    <p>&nbsp;</p>
                </div>
                <div className="w-1/3 bg-red-800">
                    <p>&nbsp;</p>
                </div>
            </div>
        </main>
    )
}

export default HomePage