import React from 'react'

function GalleryPage() {
    return (
        <main class="relative">
            <div id="mobileNav" class="absolute z-10 w-full hidden">
                <div class="md:hidden flex flex-col justify-between items-start py-2 bg-slate-900">
                    <div class="px-4 pb-2">
                        <a href="team.html" class="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">SQUAD</a>
                    </div>
                    <div class="px-4 py-2">
                        <a href="javascript:void(0);"
                            class="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">GALLERY</a>
                    </div>
                </div>
            </div>
            <section>
                <div class="md:px-8 px-5 pt-7">
                    <h1 class="text-3xl  font-semibold text-slate-700">GALLERY</h1>
                </div>
                <div class="md:px-5 pt-2">
                    <div class="overflow-hidden">
                        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-12">
                            <div class="flex flex-wrap  ">
                                <div class="flex flex-wrap md:w-1/2 w-full ">
                                    <div class="w-full p-1">
                                        <img alt="gallery" class="block object-cover object-center w-full h-full"
                                            src="images/gallery/1.webp"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-2 flex" id="mobile-hide">
                    <div class="w-1/3 bg-blue-900">
                        <p>&nbsp;</p>
                    </div>
                    <div class="w-1/3 bg-white">
                        <p>&nbsp;</p>
                    </div>
                    <div class="w-1/3 bg-red-800">
                        <p>&nbsp;</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GalleryPage