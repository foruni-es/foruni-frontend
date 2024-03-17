import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HeaderMainFooter = ({ children }) => {
    return (
        <>
            <div className="min-h-full">

                <Header />

                <div className="py-4">
                        { children }
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HeaderMainFooter;
