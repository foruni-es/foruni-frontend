import Link from 'next/link';
import { MAIN_URL } from '@/constants';

// el parámtro header indica que el logo se encuentra en el header y va a tener comportamiento responsive
const Logo = () => {
    return (
        <Link href={MAIN_URL} className='text-2xl font-bold bg-blue-600 px-3 py-0.5 text-white rounded mx-auto'>
            foruni
        </Link>
    )
}

export default Logo;