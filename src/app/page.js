'use client'

import { useState } from "react";
import SidebarComponent from './component/SidebarComponent';
import NavbarComponent from './component/NavbarComponent';
import ProductList from './component/ProductList';
import SubSidebar from './component/SubSidebarComponent';
import { items as initialItems } from './data/items';

export default function Home() {
    const [allProducts, setAllProducts] = useState(initialItems);
    const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleBookmark = (id) => {
        setAllProducts(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
            )
        );
    };

    const displayedItems = allProducts.filter(item => {
        const matchesSearch = item.item_name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesBookmark = showBookmarkedOnly ? item.bookmarked : true;

        return matchesSearch && matchesBookmark;
    });

    return (
        <div className="flex flex-col h-screen bg-[#36454F] overflow-hidden">
            <NavbarComponent onSearch={setSearchQuery}/>
            <div className="mt-2 ml-1 flex flex-row flex-1 overflow-hidden">
                <SidebarComponent />
                <main className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                    <SubSidebar
                        isFilterActive={showBookmarkedOnly}
                        onToggleFilter={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                    />
                    <ProductList
                        items={displayedItems}
                        onToggleBookmark={toggleBookmark}
                    />
                </main>
            </div>
        </div>
    );
}