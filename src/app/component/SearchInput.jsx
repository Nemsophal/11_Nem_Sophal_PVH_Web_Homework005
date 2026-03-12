'use client'

export default function SearchInput() {
    const handleSearch = (e) => {
        console.log("Searching for:", e.target.value);
    };
    return (
        <div className=" max-w-sm ml-auto">
            <input
                className="min-w-12 h-9 bg-[#71797E] border border-gray-800 rounded-lg py-1.5 px-4 text-xs text-gray-300 focus:outline-none focus:border-gray-600"
                type="text"
                placeholder="Search by item name..."
                onChange={handleSearch}
            />
        </div>
    )
}