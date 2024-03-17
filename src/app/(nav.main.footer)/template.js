import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HeaderMainFooter = ({ children }) => {
    return (
        <>
            <div className="min-h-full">

                <Header />

                { children }
                
            </div>

            <Footer />
        </>
    )
}

export default HeaderMainFooter;
