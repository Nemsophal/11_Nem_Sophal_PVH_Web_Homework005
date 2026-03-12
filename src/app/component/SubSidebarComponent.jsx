export default function SubSidebar() {
    return (
        <div className="sticky top-o z-10 flex justify-between items-center">
            <button
                className="bg-[#1a1b23] text-white px-5 py-1 rounded-full text-xs border border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
                Back
            </button>

            <div className="flex items-center gap-4">
                <h1 className="text-white text-sm font-semibold flex items-center gap-2">
                    Your Bookmark
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round" className="text-gray-400 cursor-pointer">
                        <path d="M10 2v8l3-3 3 3V2"/>
                        <path
                            d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-down-az-icon lucide-arrow-down-a-z cursor-pointer">
                        <path d="m3 16 4 4 4-4"/>
                        <path d="M7 20V4"/>
                        <path d="M20 8h-5"/>
                        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/>
                        <path d="M15 14h5l-5 6h5"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="21"
                         height="21"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         className="lucide lucide-arrow-down-za-icon lucide-arrow-down-z-a cursor-pointer">
                        <path d="m3 16 4 4 4-4"/>
                        <path d="M7 4v16"/>
                        <path d="M15 4h5l-5 6h5"/>
                        <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"/>
                        <path d="M20 18h-5"/>
                    </svg>
                </h1>
            </div>
        </div>
    )
}