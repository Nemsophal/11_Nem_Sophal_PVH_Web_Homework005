import SearchInput from './SearchInput';

export default function NavbarComponent() {
    return (
        <header className="h-12 border-b border-gray-900 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-600 overflow-hidden">
                    <img
                        src="https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg"
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </div>
                <span className="text-white font-bold text-sm cursor-pointer">Dashboard</span>
            </div>

            <SearchInput/>
        </header>
    );
}