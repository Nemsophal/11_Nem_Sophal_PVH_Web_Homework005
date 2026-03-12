'use client'

export default function SubSidebar({ isFilterActive, onToggleFilter }) {
    return (
        <div className="sticky top-0 z-10 bg-[#36454F] flex justify-between items-center pb-6 pt-2">
            <button
                className="bg-[#1a1b23] text-white px-5 py-1 rounded-full text-xs border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
                Back
            </button>

            <div className="flex items-center gap-4">
                <h1 className="text-white text-sm font-semibold flex items-center gap-2">
                    Your Bookmark
                    <svg
                        onClick={onToggleFilter}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18" height="18" viewBox="0 0 24 24"
                        fill={isFilterActive ? "#facc15" : "none"}
                        stroke={isFilterActive ? "#facc15" : "currentColor"}
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`cursor-pointer transition-colors ${isFilterActive ? "text-yellow-400" : "text-gray-400"}`}
                    >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>

                    <div className="flex gap-1 border-l border-gray-700 ml-2 pl-2">
                        <svg className="text-gray-400 cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M20 8h-5"/><path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/><path d="M15 14h5l-5 6h5"/></svg>
                        <svg className="text-gray-400 cursor-pointer" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 16 4 4 4-4"/><path d="M7 4v16"/><path d="M15 4h5l-5 6h5"/><path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/><path d="M20 18h-5"/></svg>
                    </div>
                </h1>
            </div>
        </div>
    );
}