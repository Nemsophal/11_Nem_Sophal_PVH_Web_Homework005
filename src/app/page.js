import SidebarComponent from './component/SidebarComponent';
import NavbarComponent from './component/NavbarComponent';
import ProductList from './component/ProductList';
import SubSidebar from './component/SubSidebarComponent'

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-[#36454F] overflow-hidden">
            <NavbarComponent/>
            <div className="mt-2 ml-1 flex flex-row flex-1 overflow-hidden">
                <SidebarComponent/>
                <main className="flex-1 overflow-y-auto p-5 custom-scrollbar">
                    <SubSidebar/>
                    <ProductList/>
                </main>
            </div>
        </div>
    );
}