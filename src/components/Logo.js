import Link from "next/link";
import { MAIN_URL } from "@/constants";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";

// el parámtro header indica que el logo se encuentra en el header y va a tener comportamiento responsive
const Logo = ({ header = false }) => {
    return (
        <Link href={MAIN_URL} className='text-2xl font-bold bg-blue-600 px-3 py-0.5 text-white rounded mx-auto'>
            <BuildingLibraryIcon
                className={`${header ? 'mr-0 lg:mr-1' : 'mr-1'} mb-1 h-6 w-6 flex-none text-white group-hover:text-gray-500 inline-block`}
                aria-hidden="true"
            />
            <span className={`${header ? 'hidden lg:inline-block' : ''}`}>foruni</span>
        </Link>
    )
}

export default Logo;