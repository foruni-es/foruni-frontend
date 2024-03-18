import Link from 'next/link';
import { MAIN_URL } from '@/constants';

const LandingPage = () => {

    return (
        <main className="mx-auto max-w-7xl pt-32 mt-5 lg:mt-20 xl:mt-8 2xl:mt-36">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">La plataforma de comunicación</span>{' '}
                    <span className="block text-blue-600">universitaria</span>
                </h1>
                <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                    Descubre una manera más ágil y colaborativa de comunicarte con los miembros de tu universidad (y de universidades de toda España)
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href={MAIN_URL}
                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Acceder
                    </Link>
                    <Link 
                        href="/info" 
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Saber más <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default LandingPage;