import Suggentions from '@/components/Suggestions';
import SideNavbar from '@/components/SideNavbar';
import AboutForuni from '@/components/AboutForuni';

const ThreeColumns = ({ children }) => {
    return (
        <div className="my-4 mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">

            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
                <SideNavbar />
            </div>

            <main className="lg:col-span-9 xl:col-span-7 2xl:col-span-6">
                { children }
            </main>

            <aside className="hidden xl:col-span-3 xl:block 2xl:col-span-4">
                <div className="sticky top-4 space-y-4">
                    <AboutForuni />
                    <Suggentions />
                </div>
            </aside>
            
        </div>
    )
}

export default ThreeColumns;
