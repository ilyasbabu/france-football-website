import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
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
            <div className="flex justify-between bg-slate-900 p-4">
                <div className="flex justify-between items-center">
                    <div><img className="h-12 cursor-pointer hover:scale-110 ease-in-out duration-300 transition"
                        src="images/logo.png" alt=""/>
                    </div>
                    <div className="px-4 ">
                        <Link to="/"
                            className="cursor-pointer text-white font-mono md:text-lg hover:font-semibold ease-in-out duration-300 transition">
                            FRANCE
                            FOOTBALL FEDERATION</Link>
                    </div>
                </div>
                <div className="md:flex justify-between items-center px-7 hidden">
                    <div className="px-4 ">
                        <Link to="/squad"
                            className="text-white font-mono border-b-2 border-transparent hover:border-purple-100 ease-in-out duration-300 transition">SQUAD</Link>
                    </div>
                    <div className="px-4 ">
                        <Link to="/gallery"
                            className="text-white font-mono border-b-2 border-transparent hover:border-purple-100 ease-in-out duration-300 transition">GALLERY</Link>
                    </div>
                </div>
                <div className="flex md:hidden">
                    <svg className="fill-current text-white w-5" id="breadButton" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg className="fill-current text-white w-5 hidden" id="closeButton" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <path
                            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </div>
            </div>
            <div className="h-1 flex" id="mobile-hide">
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
            <div className="h-1 hidden" id="mobile-show">
                <div className="w-full bg-slate-900">
                    <p>&nbsp;</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar