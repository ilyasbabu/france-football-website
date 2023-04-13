import React from 'react'
import squad from '../data/squad'

function SquadPage() {
    return (
        <main className="relative">
            <section className="px-8 pt-7">
                <div>
                    <h1 className="text-3xl  font-semibold text-slate-700">SQUAD</h1>
                </div>
            </section>
            <section className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 object-cover overflow-hidden">
                    {
                        squad.map((item,index) => {
                            return (
                                <div key={index} className="w-full h-96 overflow-hidden object-cover relative group transition ease-in-out duration-1000 rounded-md hover:shadow-lg">
                                    <img className="hover:scale-105 w-full transition ease-in-out duration-1000" src={item.img} alt={item.name} />
                                    <div className="absolute bottom-0 bg-slate-500 w-full flex justify-between text-white p-2 opacity-75 font-semibold text-xl group-hover:opacity-100 transition ease-in-out duration-1000">
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