import React from 'react'
import squad from '../data/squad'

function SquadPage() {
    return (
        <main class="relative">
            <div id="mobileNav" class="absolute z-10 w-full hidden">
                <div class="md:hidden flex flex-col justify-between items-start py-2 bg-slate-900">
                    <div class="px-4 pb-2">
                        <p class="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">SQUAD</p>
                    </div>
                    <div class="px-4 py-2">
                        <a href="gallery.html" class="text-white font-mono hover:scale-105 ease-in-out duration-300 transition">GALLERY</a>
                    </div>
                </div>
            </div>
            <section class="px-8 pt-7">
                <div>
                    <h1 class="text-3xl  font-semibold text-slate-700">SQUAD</h1>
                </div>
            </section>
            <section class="p-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 object-cover overflow-hidden">
                    {
                        squad.map((item) => {
                            return (
                                <div class="w-full h-96 overflow-hidden object-cover relative group transition ease-in-out duration-1000 rounded-md hover:shadow-lg">
                                    <img class="hover:scale-105 w-full transition ease-in-out duration-1000" src={item.img} alt={item.name} />
                                    <div class="absolute bottom-0 bg-slate-500 w-full flex justify-between text-white p-2 opacity-75 font-semibold text-xl group-hover:opacity-100 transition ease-in-out duration-1000">
                                        <div><p>{item.name}</p></div>
                                        <div><p>{item.number}</p></div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default SquadPage