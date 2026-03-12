import {items} from '../data/items';

export default function ProductList() {
    return (
        <div className="flex flex-col gap-3">
            {items.map((item) => (
                <div key={item.id}
                     className="flex items-center justify-between bg-[#111218] p-4 rounded-xl border border-gray-900 group hover:border-gray-700 transition">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-14 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.item_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-white text-sm font-medium">{item.item_name}</h3>
                                <span className="text-gray-500 text-xs">${item.item_price}</span>
                                <span className={item.bookmarked ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="lucide lucide-bookmark cursor-pointer">
                                <path
                                    d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/>
                                </svg>
                                </span>
                            </div>
                            <p className="text-gray-500 text-[11px] mt-1">{item.item_description}</p>
                        </div>
                    </div>
                    <button
                        className="bg-[#1c1d3d] text-[#a5a6f6] px-6 py-1.5 rounded-lg text-xs font-bold hover:bg-[#252752] cursor-pointer">
                        View
                    </button>
                </div>
            ))}
        </div>
    );
}