'use client'
export default function SidebarComponent() {
    const menus = ['Overview', 'Items', 'Orders', 'Customers', 'Settings'];
    return (
        <aside
            className="w-64 h-auto bg-[#0a0b10] border-r border-gray-900 flex flex-col p-2 rounded-tr-3xl rounded-tl-3xl">

            <nav className="flex flex-col gap-1">
                <p className="text-[10px] uppercase text-gray-500 font-bold mb-4 tracking-widest px-4">
                    Menu
                </p>
                {menus.map((menu) => (
                    <button
                        key={menu}
                        className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            menu === 'Items'
                                ? 'bg-[#1a1b23] text-white border border-gray-800'
                                : 'text-gray-400 hover:bg-[#111218] hover:text-white'
                        }`}
                    >
                        {menu}
                    </button>
                ))}
            </nav>
            <div className="mt-auto"/>
        </aside>
    );
}