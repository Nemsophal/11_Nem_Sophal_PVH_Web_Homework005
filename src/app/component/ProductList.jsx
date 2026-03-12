'use client'

import { useState } from 'react';
import ItemModal from './ItemModal';

export default function ProductList({ items, onToggleBookmark }) {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="flex flex-col gap-3">
            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.id}
                         className="flex items-center justify-between bg-[#111218] p-4 rounded-xl border border-gray-900 group hover:border-gray-700 transition">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-14 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                                <img src={item.image} alt={item.item_name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-white text-sm font-medium">{item.item_name}</h3>
                                    <span className="text-gray-500 text-xs">${item.item_price}</span>

                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleBookmark(item.id);
                                        }}
                                        className={`cursor-pointer transition-all ${item.bookmarked ? "text-yellow-400" : "text-gray-600 hover:text-gray-400"}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                             fill={item.bookmarked ? "currentColor" : "none"}
                                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                        </svg>
                                    </span>
                                </div>
                                <p className="text-gray-500 text-[11px] mt-1 line-clamp-1">{item.item_description}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setSelectedItem(item)}
                            className="bg-[#1c1d3d] text-[#a5a6f6] px-6 py-1.5 rounded-lg text-xs font-bold hover:bg-[#252752] transition-colors cursor-pointer"
                        >
                            View
                        </button>
                    </div>
                ))
            ) : (
                <div className="text-center py-20 text-gray-500 text-sm">BookMark Empty</div>
            )}

            {selectedItem && (
                <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
}